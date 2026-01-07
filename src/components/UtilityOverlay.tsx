import { X } from 'lucide-react';
import type { LinkItem } from '../config/sidebarLinks';
import { getLogoUrl } from '../config/sidebarLinks';

interface UtilityOverlayProps {
    items: LinkItem[];
    category: string;
    onClose: () => void;
}

export function UtilityOverlay({ items, category, onClose }: UtilityOverlayProps) {
    return (
        <div className="w-full h-full flex flex-col animate-fade-in bg-background/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10 bg-white/5">
                <h2 className="text-3xl font-space font-bold text-white uppercase tracking-wider">
                    {category}
                </h2>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Content Grid */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 rounded-full bg-black/50 p-1 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-shadow">
                                <img
                                    src={item.icon || getLogoUrl(item.url)}
                                    alt={item.name}
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/64?text=' + item.name.charAt(0);
                                    }}
                                />
                            </div>
                            <span className="text-gray-300 font-medium tracking-wide group-hover:text-white transition-colors">
                                {item.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
