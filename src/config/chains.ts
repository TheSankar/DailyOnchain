import { defineChain } from 'viem'
import { base, worldchain } from 'wagmi/chains'

export const inkchain = defineChain({
    id: 57073,
    name: 'Ink',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc-gel.inkonchain.com'] },
    },
    blockExplorers: {
        default: { name: 'Ink Explorer', url: 'https://explorer.inkonchain.com' },
    },
    testnet: false,
})

export const sonieum = defineChain({
    id: 1868,
    name: 'Soneium',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.soneium.org/'] },
    },
    blockExplorers: {
        default: { name: 'Soneium Explorer', url: 'https://soneium.blockscout.com' },
    },
    testnet: false,
})

export const unichain = defineChain({
    id: 130,
    name: 'Unichain',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://mainnet.unichain.org'] },
    },
    blockExplorers: {
        default: { name: 'Unichain Explorer', url: 'https://uniscan.xyz' },
    },
    testnet: false,
})

export const optimism = defineChain({
    id: 10,
    name: 'Optimism',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://mainnet.optimism.io'] },
    },
    blockExplorers: {
        default: { name: 'Optimism Explorer', url: 'https://optimistic.etherscan.io' },
    },
    testnet: false,
})

export const mode = defineChain({
    id: 34443,
    name: 'Mode',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://mainnet.mode.network/'] },
    },
    blockExplorers: {
        default: { name: 'Mode Explorer', url: 'https://explorer.mode.network' },
    },
    testnet: false,
})

export const katana = defineChain({
    id: 747474,
    name: 'Katana',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.katana.network'] },
    },
    blockExplorers: {
        default: { name: 'Katana Explorer', url: 'https://explorer.katana.network' }, // Placeholder based on typical pattern, user can verify
    },
    testnet: false,
})

export const monad = defineChain({
    id: 143,
    name: 'Monad',
    nativeCurrency: { name: 'Monad', symbol: 'MON', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.monad.xyz'] },
    },
    blockExplorers: {
        default: { name: 'Monad Explorer', url: 'https://explorer.monad.xyz' }, // Placeholder
    },
    testnet: false,
})

export const hyperliquid = defineChain({
    id: 999,
    name: 'Hyperliquid',
    nativeCurrency: { name: 'Hyperliquid', symbol: 'HYPE', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.hyperliquid.xyz/evm'] },
    },
    blockExplorers: {
        default: { name: 'Hyperliquid Explorer', url: 'https://explorer.hyperliquid.xyz' }, // Placeholder
    },
    testnet: false,
})

export const CONTRACT_ADDRESSES: Record<number, `0x${string}`> = {
    [base.id]: '0x022BB2AFe3C6D08c49DDE9a9626392709924f749',
    [inkchain.id]: '0xE1aB83c32030FA0718d969702EfdE455647cC24d',
    [sonieum.id]: '0x756c4C3C04F1FB55f60ec5606a79C1609e953502',
    [unichain.id]: '0x4dC49C82DFe8edd3aeE572301a407Dd1e082A276',
    [worldchain.id]: '0xb7e13f0dc8a4d8f68e47679119e7dc3730967bc7',
    // Phase - 2
    [optimism.id]: '0x28e8a6c4f523acef89df72527a955e6017f4a424',
    [mode.id]: '0x299563f7C0EaF29bE31FF656Ca118e53E25EDA09',
    [katana.id]: '0xb7e58dda2eb0da8abdbfae80fd5d70a64aa23e9a',
    [monad.id]: '0x944e6fF8d24906F805E20Fd5BFcb6920A6652447',
    [hyperliquid.id]: '0x39dcff8e7baf56c05ddd32d4b017e0429749aae2',
}
