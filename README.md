# Onchain-toolkit 🧭

A multi-chain Web3 daily check-in app that lets users maintain on-chain streaks across EVM L2s.

Built to explore **onchain identity, consistency, and reputation** — not farming gimmicks.

---

## ✨ What this does

- Daily check-in recorded **onchain**
- Per-chain streak tracking (Base live)
- Wallet-based identity (no accounts)
- Clean, minimal UX for daily use
- Lightweight market context (BTC / ETH / SOL prices)

---

## 🌐 Supported Chains

| Chain | Status |
|------|-------|
| Base | ✅ Live |
| Unichain | ✅ Live |
| World Chain | ✅ Live |
| Soneium | ✅ Live |
| Ink Chain | ✅ Live |
| Otherchains | 🔜 Planned |

> Each chain uses its **own deployed contract**.

---

## 🧠 How it works (technical)

- **Frontend:** Vite + React + TypeScript
- **Wallet:** wagmi + WalletConnect
- **Contracts:** Simple EVM smart contract
- **Hosting:** Vercel
- **Prices:** Off-chain API (CoinGecko)

### Check-In Logic
- One check-in allowed per wallet every 24 hours
- Streak resets if a day is missed
- All streaks are verifiable onchain

  ## 📜 Smart Contracts

| Chain       | Contract Address |
|-------------|------------------|
| Base        | `0x022BB2AFe3C6D08c49DDE9a9626392709924f749` |
| Unichain    | `0x4dC49C82DFe8edd3aeE572301a407Dd1e082A276` |
| World Chain | `0xb7e13f0dc8a4d8f68e47679119e7dc3730967bc7` |
| Soneium     | `0x756c4C3C04F1FB55f60ec5606a79C1609e953502` |
| Ink Chain   | `0xE1aB83c32030FA0718d969702EfdE455647cC24d` |

        

> Deployed from EOA, verified, and used directly by the frontend.

---

## 🚀 Live Demo

👉 https://daily-onchain.vercel.app

---
