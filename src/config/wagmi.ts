import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, worldchain } from 'wagmi/chains';
import { inkchain, sonieum, unichain } from './chains';

export const config = getDefaultConfig({
    appName: 'Web3 Daily Check-in',
    projectId: 'YOUR_PROJECT_ID', // TODO: User needs to provide this or use a public one
    chains: [inkchain, base, sonieum, unichain, worldchain],
    ssr: false, // Client-side only for this app
});
