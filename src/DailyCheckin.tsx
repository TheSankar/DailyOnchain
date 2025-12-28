import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { ChainIcon } from './components/ChainIcon';
import { CryptoTicker } from './components/CryptoTicker';
import { inkchain, sonieum, unichain, optimism, mode, katana, monad, hyperliquid } from './config/chains';
import { base, worldchain } from 'wagmi/chains';

// Image Assets
import inkLogo from './assets/images/ink.png';
import baseLogo from './assets/images/base.png';
import soneiumLogo from './assets/images/soneium.png';
import unichainLogo from './assets/images/unichain.png';
import worldchainLogo from './assets/images/worldchain.png';
import optimismLogo from './assets/images/optimism.png';
import modeLogo from './assets/images/mode.png';
import katanaLogo from './assets/images/katana.png';
import monadLogo from './assets/images/monad.png';
import hyperliquidLogo from './assets/images/hyperliquid.png';

const CHAINS_ROW_1 = [
    { chain: unichain, name: 'Unichain', icon: unichainLogo, borderColor: 'border-pink-500' },
    { chain: inkchain, name: 'Ink', icon: inkLogo, borderColor: 'border-violet-500' },
    { chain: base, name: 'Base', icon: baseLogo, borderColor: 'border-blue-500' },
    { chain: worldchain, name: 'World Chain', icon: worldchainLogo, borderColor: 'border-emerald-500' },
    { chain: sonieum, name: 'Soneium', icon: soneiumLogo, borderColor: 'border-white/20' },
];

const CHAINS_ROW_2 = [
    { chain: optimism, name: 'Optimism', icon: optimismLogo, borderColor: 'border-red-500' },
    { chain: mode, name: 'Mode', icon: modeLogo, borderColor: 'border-yellow-400' },
    { chain: katana, name: 'Katana', icon: katanaLogo, borderColor: 'border-orange-500' },
    { chain: monad, name: 'Monad', icon: monadLogo, borderColor: 'border-purple-600' },
    { chain: hyperliquid, name: 'Hyperliquid', icon: hyperliquidLogo, borderColor: 'border-cyan-400' },
];

function DailyCheckin() {
    const { isConnected } = useAccount();

    return (
        <div className="min-h-screen bg-[#0a0b1e] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[150px]" />
            </div>

            <div className="z-10 w-full max-w-5xl px-4 flex flex-col items-center">

                {/* Header Section */}
                {!isConnected ? (
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            Free Daily Check-in
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
                            Connect your wallet to start your on-chain streak across the major L1 and L2's
                        </p>
                        <div className="flex justify-center">
                            <ConnectButton />
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Dashboard Section */}
                        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
                            <h1 className="text-4xl md:text-6xl font-bold mb-3 font-space relative inline-flex items-baseline justify-center">
                                <span className="text-base md:text-lg text-white/30 font-normal absolute right-full mr-4 whitespace-nowrap bottom-1.5"> W back</span>
                                <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">O N C H A I N - M A X I</span>
                            </h1>
                            <p className="text-lg text-gray-400 font-normal tracking-wide">
                                Keep your streak with major L1 and L2 chains
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-12 animate-fade-in-up delay-100 items-center">
                            {/* Row 1 */}
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {CHAINS_ROW_1.map((item) => (
                                    <ChainIcon
                                        key={item.chain.id}
                                        chain={{ ...item.chain, name: item.name }}
                                        iconUrl={item.icon}
                                        borderColor={item.borderColor}
                                    />
                                ))}
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                                {CHAINS_ROW_2.map((item) => (
                                    <ChainIcon
                                        key={item.chain.id}
                                        chain={{ ...item.chain, name: item.name }}
                                        iconUrl={item.icon}
                                        borderColor={item.borderColor}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="fixed top-6 right-6 z-50">
                            <ConnectButton chainStatus="none" showBalance={false} />
                        </div>
                    </>
                )}
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 text-center z-20 pointer-events-none w-full">
                <a
                    href="https://x.com/Thesankarg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto text-gray-500 hover:text-white text-xs font-medium tracking-widest transition-colors opacity-70 hover:opacity-100"
                >
                    -- Created by Sankar 💚 --
                </a>
            </div>

            {/* Ticker - Bottom Left */}
            <div className="absolute bottom-6 left-6 z-20 hidden md:block">
                <CryptoTicker />
            </div>
        </div>
    );
}

export default DailyCheckin;
