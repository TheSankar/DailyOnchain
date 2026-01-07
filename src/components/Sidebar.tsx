import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { CryptoTicker } from './CryptoTicker';

interface SidebarProps {
    activeCategory: string | null;
    setActiveCategory: (category: 'socials' | 'tools' | 'dapps' | null) => void;
}

export function Sidebar({ activeCategory, setActiveCategory }: SidebarProps) {
    const [timeIST, setTimeIST] = useState<string>('');
    const [timeUTC, setTimeUTC] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // IST
            const istOptions: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            setTimeIST(now.toLocaleTimeString('en-GB', istOptions));

            // UTC
            const utcOptions: Intl.DateTimeFormatOptions = {
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            setTimeUTC(now.toLocaleTimeString('en-GB', utcOptions));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const categories = [
        { id: 'socials', label: 'SOCIALS', flex: 'flex-[3]' },
        { id: 'tools', label: 'TOOLS', flex: 'flex-[3]' },
        { id: 'dapps', label: 'DAPPS', flex: 'flex-[4]' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-transparent p-6 gap-6 font-sans pointer-events-auto">

            {/* SECTION 1: MARKET */}
            <div className="flex-1 min-h-0 bg-[#0a0f23]/45 backdrop-blur-md border border-white/5 rounded-[24px] overflow-hidden relative shadow-2xl flex flex-col pt-6">
                <CryptoTicker className="!bg-transparent !border-none !shadow-none !p-6 !gap-4" />
            </div>

            {/* SECTION 2: LAUNCHER */}
            <div className="flex-[2] min-h-0 bg-[#0a0f23]/45 backdrop-blur-md border border-white/5 rounded-[24px] flex flex-col overflow-hidden shadow-2xl">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id as any)}
                        className={clsx(
                            "flex-1 w-full text-left relative overflow-hidden transition-all duration-300",
                            "hover:bg-white/5 group",
                            activeCategory === cat.id ? "bg-white/10" : "bg-transparent"
                        )}
                    >
                        <div className="h-full flex items-center justify-between px-6 relative z-10">
                            <span className={clsx(
                                "text-4xl font-space font-bold tracking-wide transition-all duration-300",
                                activeCategory === cat.id ? "text-white translate-x-4" : "text-gray-400 group-hover:text-white group-hover:translate-x-2"
                            )}>
                                {cat.label}
                            </span>

                            {/* Active/Hover Indicator */}
                            <div className={clsx(
                                "w-1.5 h-12 rounded-full transition-all duration-300",
                                activeCategory === cat.id ? "bg-blue-500 shadow-[0_0_15px_#3b82f6]" : "bg-white/5 group-hover:bg-white/20"
                            )} />
                        </div>
                    </button>
                ))}
            </div>

            {/* SECTION 3: TIME */}
            <div className="flex-1 min-h-0 bg-[#0a0f23]/45 backdrop-blur-md border border-white/5 rounded-[24px] p-6 flex flex-col justify-center items-center shadow-2xl relative overflow-hidden">
                {/* Digital Clock aesthetic */}
                <div className="flex flex-col gap-6 w-full opacity-90">
                    {/* IST */}
                    <div className="flex justify-between items-baseline w-full px-2">
                        <span className="text-4xl font-mono font-medium text-white tracking-tight tabular-nums">{timeIST}</span>
                        <span className="text-xl font-mono text-white/70 font-bold tracking-widest translate-y-[-2px]">IST</span>
                    </div>

                    {/* UTC */}
                    <div className="flex justify-between items-baseline w-full px-2">
                        <span className="text-4xl font-mono font-medium text-white tracking-tight tabular-nums">{timeUTC}</span>
                        <span className="text-xl font-mono text-white/70 font-bold tracking-widest translate-y-[-2px]">UTC</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
