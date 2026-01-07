import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { clsx } from 'clsx';

interface PriceData {
    usd: number;
    usd_24h_change: number;
}

interface MarketData {
    bitcoin?: PriceData;
    ethereum?: PriceData;
    solana?: PriceData;
}

const COIN_IDS = 'bitcoin,ethereum,solana';
const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_IDS}&vs_currencies=usd&include_24hr_change=true`;

interface CryptoTickerProps {
    className?: string;
}

export function CryptoTicker({ className }: CryptoTickerProps) {
    const [prices, setPrices] = useState<MarketData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPrices = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setPrices(data);
            setError(false);
        } catch (err) {
            console.error("Failed to fetch price data:", err);
            setError(true);
            // Keep showing old data if available (cache), otherwise error state logic applies
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrices();
        const interval = setInterval(fetchPrices, 60000); // 60s
        return () => clearInterval(interval);
    }, []);

    if (loading && !prices) return null; // Don't show anything until we have data
    if (error && !prices) return null; // Hide if initial fetch fails

    const coins = [
        { id: 'bitcoin', symbol: 'BTC', data: prices?.bitcoin },
        { id: 'ethereum', symbol: 'ETH', data: prices?.ethereum },
        { id: 'solana', symbol: 'SOL', data: prices?.solana },
    ];

    return (
        <div className={clsx("flex flex-col gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg w-full", className)}>
            {coins.map((coin) => {
                if (!coin.data) return null;
                const isPositive = coin.data.usd_24h_change >= 0;

                return (
                    <div key={coin.id} className="flex items-center justify-between gap-4 text-sm md:text-base font-medium w-full">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 font-bold w-8">{coin.symbol}</span>
                            <span className="text-white">${coin.data.usd.toLocaleString()}</span>
                        </div>
                        <div className={clsx(
                            "flex items-center gap-0.5",
                            isPositive ? "text-green-400" : "text-red-400"
                        )}>
                            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            <span>{Math.abs(coin.data.usd_24h_change).toFixed(1)}%</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
