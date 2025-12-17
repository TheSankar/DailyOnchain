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

export const CONTRACT_ADDRESSES: Record<number, `0x${string}`> = {
    [base.id]: '0x022BB2AFe3C6D08c49DDE9a9626392709924f749',
    [inkchain.id]: '0xE1aB83c32030FA0718d969702EfdE455647cC24d',
    [sonieum.id]: '0x756c4C3C04F1FB55f60ec5606a79C1609e953502',
    [unichain.id]: '0x4dC49C82DFe8edd3aeE572301a407Dd1e082A276',
    [worldchain.id]: '0xb7e13f0dc8a4d8f68e47679119e7dc3730967bc7',
}
