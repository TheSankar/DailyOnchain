import { useAccount, useSwitchChain, useWaitForTransactionReceipt, useWriteContract, useReadContract } from 'wagmi';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BaseCheckinABI } from '../config/BaseCheckinABI';
import { CONTRACT_ADDRESSES } from '../config/chains';
import { playCheckinSound } from '../utils/SoundManager';
import { useEffect, useState } from 'react';

interface ChainIconProps {
    chain: {
        id: number;
        name: string;
        testnet?: boolean;
    };
    iconUrl: string;
    borderColor: string;
}

export function ChainIcon({ chain, iconUrl, borderColor }: ChainIconProps) {
    const { address, chain: currentChain, isConnected } = useAccount();
    const { switchChain } = useSwitchChain();

    // Local processing state to handle "switching to THIS chain" specifically
    const [isProcessing, setIsProcessing] = useState(false);

    const contractAddress = CONTRACT_ADDRESSES[chain.id];
    const isSupported = !!contractAddress;

    const { writeContract, data: contractHash, isPending: isWritingContract, error: writeError } = useWriteContract();

    // Reset processing if write errors or finishes
    useEffect(() => {
        if (contractHash || writeError) {
            setIsProcessing(false);
        }
    }, [contractHash, writeError]);

    // Read Streak
    const { data: streak, refetch: refetchStreak } = useReadContract({
        address: contractAddress,
        abi: BaseCheckinABI,
        functionName: 'getStreak',
        args: address ? [address] : undefined,
        chainId: chain.id, // Fix: Ensure we read from the specific chain, not active chain
        query: {
            enabled: isSupported && !!address,
        }
    });

    // Read Last Check-in Time
    const { data: lastCheckIn, refetch: refetchLastCheckIn } = useReadContract({
        address: contractAddress,
        abi: BaseCheckinABI,
        functionName: 'getLastCheckIn',
        args: address ? [address] : undefined,
        chainId: chain.id,
        query: {
            enabled: isSupported && !!address,
        }
    });

    const [timeLeft, setTimeLeft] = useState<string>('');

    useEffect(() => {
        // If never checked in, it's available
        if (!lastCheckIn && lastCheckIn !== 0n) {
            setTimeLeft('Available Now');
            return;
        }

        const nowSeconds = Math.floor(Date.now() / 1000);
        const currentDayIndex = Math.floor(nowSeconds / 86400);

        // Handle potential timestamp vs day index
        let lastCheckInIndex = Number(lastCheckIn);
        if (lastCheckInIndex > 100000) {
            lastCheckInIndex = Math.floor(lastCheckInIndex / 86400);
        }

        // If user hasn't checked in today (or ever), it's available
        // Note: lastCheckIn 0 means never checked in
        if (lastCheckIn === 0n || lastCheckInIndex < currentDayIndex) {
            setTimeLeft('Available Now');
        } else {
            setTimeLeft('Already checked-in');
        }
    }, [lastCheckIn]);

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash: contractHash,
        chainId: chain.id, // Fix: Ensure we poll the receipt on the correct chain
    });

    // Refresh streak and play sound on success
    useEffect(() => {
        if (isSuccess) {
            refetchStreak();
            refetchLastCheckIn();
            playCheckinSound();
        }
    }, [isSuccess, refetchStreak]);

    const isWrongChain = isConnected && currentChain?.id !== chain.id;

    // Only show pending state if WE are definitely doing something related to this card
    const isPending = isProcessing || ((isWritingContract || isConfirming) && !isSuccess);

    const handleCheckIn = () => {
        if (!isConnected) return;

        if (isWrongChain) {
            setIsProcessing(true); // Start local loading
            switchChain({ chainId: chain.id }, {
                onSuccess: () => setIsProcessing(false),
                onError: () => setIsProcessing(false),
            });
            return;
        }

        if (isSupported && contractAddress) {
            writeContract({
                address: contractAddress,
                abi: BaseCheckinABI,
                functionName: 'checkIn',
            });
        }
    };

    const isDisabled = !isSupported || !isConnected || isPending || isSuccess;

    return (
        <div className="flex flex-col items-center gap-6 group cursor-pointer" onClick={() => !isDisabled && handleCheckIn()}>
            <div className="relative">
                <motion.div
                    whileHover={!isDisabled ? { scale: 1.15, rotate: 2 } : {}}
                    whileTap={!isDisabled ? { scale: 0.9 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className={twMerge(
                        "relative w-[136px] h-[136px] rounded-full border-[4px] flex items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden",
                        borderColor,
                        isSupported ? "opacity-100 shadow-xl" : "opacity-40 grayscale cursor-not-allowed",
                        isPending && "animate-pulse border-yellow-500",
                        isSuccess && "border-green-500 shadow-[0_0_50px_rgba(16,185,129,0.5)]"
                    )}
                >
                    {/* Pending Spinner Overlay */}
                    <AnimatePresence>
                        {isPending && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full z-20"
                            >
                                <Loader2 className="w-10 h-10 text-white animate-spin" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Success Checkmark Overlay */}
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                className="absolute -bottom-2 -right-2 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full z-30 ring-4 ring-[#0a0b1e] shadow-lg"
                            >
                                <Check className="w-6 h-6 text-white" strokeWidth={4} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Image - Massive sizing */}
                    <div className="w-24 h-24 flex items-center justify-center z-10">
                        <img
                            src={iconUrl}
                            alt={chain.name}
                            className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                        />
                    </div>

                    {/* Glow Background */}
                    <div className={clsx("absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500", borderColor.replace('border-', 'bg-'))} />
                </motion.div>
            </div>

            <div className="text-center transition-all duration-300 group-hover:transform group-hover:translate-y-1">
                <div className="text-sm font-bold text-white mb-2 tracking-widest uppercase font-inter drop-shadow-md">
                    {(streak !== undefined && isSupported) ? `${streak.toString()} DAYS STREAK` : '0 DAYS STREAK'}
                </div>

                {timeLeft && (
                    <div className={twMerge(
                        "text-sm font-bold mt-1 tracking-wider drop-shadow-md font-inter",
                        timeLeft === 'Available Now' ? "text-green-400" : "text-indigo-300"
                    )}>
                        {timeLeft}
                    </div>
                )}
            </div>
        </div>
    );
}
