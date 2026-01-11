import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { ChainIcon } from './components/ChainIcon';
import { Sidebar } from './components/Sidebar';
import { UtilityOverlay } from './components/UtilityOverlay';
import { socials, tools, dapps } from './config/sidebarLinks';
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
    const [activeCategory, setActiveCategory] = useState<'socials' | 'tools' | 'dapps' | null>(null);

    const getActiveItems = () => {
        switch (activeCategory) {
            case 'socials': return socials;
            case 'tools': return tools;
            case 'dapps': return dapps;
            default: return [];
        }
    };

    return (
        <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">

            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[150px]" />
            </div>

            <div className="z-10 w-full px-4 flex flex-col items-center">

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
                        <div className="flex w-full min-h-screen relative bg-transparent overflow-hidden">

                            {/* Left Sidebar Rail - Floating */}
                            <div className="hidden md:block fixed left-0 top-0 bottom-0 p-6 z-50 h-[133.33vh] w-[320px] pointer-events-none">
                                <div className="pointer-events-auto h-full w-full">
                                    <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                                </div>
                            </div>

                            {/* Main Content Area - True Center (No sidebar offset) */}
                            <div className="flex-1 flex flex-col items-center justify-center w-full min-h-[133.33vh] relative p-0 z-30">

                                <div className="fixed top-6 right-6 z-50">
                                    <ConnectButton chainStatus="none" showBalance={false} />
                                </div>

                                {/* Content Switcher */}
                                {activeCategory ? (
                                    <div className="w-full h-full flex items-center justify-center animate-fade-in">
                                        <div className="w-full max-w-6xl px-12">
                                            <UtilityOverlay
                                                items={getActiveItems()}
                                                category={activeCategory}
                                                onClose={() => setActiveCategory(null)}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex flex-col items-center justify-center w-full max-w-5xl animate-fade-in-up px-4">
                                            {/* Dashboard Header */}
                                            <div className="flex flex-col items-center text-center mb-16 w-full">
                                                <h1 className="text-4xl md:text-6xl font-bold mb-3 font-space relative inline-flex items-baseline justify-center">
                                                    <span className="text-base md:text-lg text-white/30 font-normal absolute right-full mr-4 whitespace-nowrap bottom-1.5 opacity-50">W back</span>
                                                    <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">O N C H A I N -M A X I</span>
                                                </h1>
                                                <p className="text-lg text-gray-500 font-medium tracking-[0.2em] uppercase">
                                                    Keep your streak alive
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-10 items-center w-full">
                                                {/* Row 1 */}
                                                <div className="flex flex-wrap justify-center gap-11">
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
                                                <div className="flex flex-wrap justify-center gap-11">
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
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 text-center z-20 pointer-events-none w-full">
                <a
                    href="https://x.com/Thesankarg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto text-gray-500 hover:text-white text-xs font-medium tracking-widest transition-colors opacity-50 hover:opacity-100"
                >
                    -- Created by Sankar  --
                </a>
            </div>

        </div>
    );
}

export default DailyCheckin;
