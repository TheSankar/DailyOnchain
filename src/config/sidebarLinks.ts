

// Socials
import farcasterImg from '../assets/logos/farcaster.png';
import discordImg from '../assets/logos/discord-logo.png';
import instagramImg from '../assets/logos/instagram.png';
import xImg from '../assets/logos/Xlogo.png';
import redditImg from '../assets/logos/reddit.webp';
import superboardImg from '../assets/logos/superboard.jpg';
import zoraImg from '../assets/logos/zora.png';

// Tools
import chatgptImg from '../assets/logos/chatgpt.webp';
import dexscreenerImg from '../assets/logos/dexscreener.png';
import debankImg from '../assets/logos/debank.png';
import cmcImg from '../assets/logos/coinmarketcap.png';
import duneImg from '../assets/logos/dune.png';
import arkhamImg from '../assets/logos/ARKM.webp';
import cryptoquantImg from '../assets/logos/quant.png';
import defillamaImg from '../assets/logos/DefiLlama.png';
import cryptorankImg from '../assets/logos/cryptorank.webp';

// Dapps
import jumperImg from '../assets/logos/jumper-exchange.png';
import okuImg from '../assets/logos/oku.jpg';
import hyperliquidImg from '../assets/logos/hyperliquid.png';
import polymarketImg from '../assets/logos/polymarket.png';
import kalshiImg from '../assets/logos/kalshi.png';
import lighterImg from '../assets/logos/lighter.jpg';
import jupiterImg from '../assets/logos/jupiter.jpg';
import abstractImg from '../assets/logos/abstract.jpg';

export interface LinkItem {
    name: string;
    url: string;
    icon?: string;
}

export const socials: LinkItem[] = [
    { name: 'Farcaster', url: 'https://farcaster.xyz/', icon: farcasterImg },
    { name: 'Discord', url: 'https://discord.com', icon: discordImg },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: instagramImg },
    { name: 'DeBank', url: 'https://debank.com', icon: debankImg },
    { name: 'X', url: 'https://x.com', icon: xImg },
    { name: 'Reddit', url: 'https://www.reddit.com', icon: redditImg },
    { name: 'Superboard', url: 'https://superboard.xyz', icon: superboardImg },
    { name: 'Zora', url: 'https://zora.co', icon: zoraImg },
];

export const tools: LinkItem[] = [
    { name: 'ChatGPT', url: 'https://chat.openai.com', icon: chatgptImg },
    { name: 'Dexscreener', url: 'https://dexscreener.com', icon: dexscreenerImg },
    { name: 'CoinMarketCap', url: 'https://www.coinmarketcap.com', icon: cmcImg },
    { name: 'Dune', url: 'https://dune.com', icon: duneImg },
    { name: 'DefiLlama', url: 'https://defillama.com', icon: defillamaImg },
    { name: 'Arkham', url: 'https://arkhamintelligence.com', icon: arkhamImg },
    { name: 'CryptoRank', url: 'https://cryptorank.io', icon: cryptorankImg },
    { name: 'CryptoQuant', url: 'https://cryptoquant.com', icon: cryptoquantImg },
];

export const dapps: LinkItem[] = [
    { name: 'Jumper', url: 'https://jumper.exchange', icon: jumperImg },
    { name: 'Oku', url: 'https://oku.trade', icon: okuImg },
    { name: 'Hyperliquid', url: 'https://hyperliquid.xyz', icon: hyperliquidImg },
    { name: 'Polymarket', url: 'https://polymarket.com', icon: polymarketImg },
    { name: 'Kalshi', url: 'https://kalshi.com', icon: kalshiImg },
    { name: 'Lighter', url: 'https://lighter.xyz', icon: lighterImg },
    { name: 'Jupiter', url: 'https://jup.ag', icon: jupiterImg },
    { name: 'Abstract', url: 'https://portal.abs.xyz/profile', icon: abstractImg },
];

export const getLogoUrl = (url: string): string => {
    try {
        const domain = new URL(url).hostname;
        return `https://logo.clearbit.com/${domain}`;
    } catch (e) {
        return '';
    }
};
