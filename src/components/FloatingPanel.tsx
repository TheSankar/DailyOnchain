
import type { LinkItem } from '../config/sidebarLinks';
import { getLogoUrl } from '../config/sidebarLinks';

interface FloatingPanelProps {
    items: LinkItem[];
    title: string;
    onClose: () => void;
}

export function FloatingPanel({ items, onClose }: FloatingPanelProps) {
    return (
        <div
            className="absolute left-full top-0 ml-4 p-4 bg-[#0a0b1e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 w-64 animate-fade-in"
            onMouseLeave={onClose}
        >
            {/* Optional: Title for context if needed, but user asked for just grid for Dapps. 
                 Keeping it minimal as per "No text labels" rule for icons. 
                 Maybe a header? leaving header out for now to be cleaner or just small text.
             */}
            {/* <h3 className="text-white/50 text-xs uppercase tracking-wider mb-3">{title}</h3> */}

            <div className="grid grid-cols-4 gap-3">
                {items.map((item) => (
                    <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:scale-105 group relative"
                        title={item.name} // Tooltip for accessibility and clarity
                    >
                        <img
                            src={getLogoUrl(item.url)}
                            alt={item.name}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/32?text=' + item.name.charAt(0);
                            }}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
