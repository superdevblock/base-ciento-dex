import { mainnet, goerli, avalanche, avalancheFuji } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = avalanche

export const avalandcheFuji: Chain = avalancheFuji

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.ftm.tools'] },
    public: { http: ['https://rpc.ftm.tools'] },
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.fantom.network'] },
    public: { http: ['https://rpc.testnet.fantom.network'] },
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    default: { http: ['https://bsc-dataseed1.binance.org'] },
    public: { http: ['https://bsc-dataseed1.binance.org'] },
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 15921452,
    },
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: { http: ['https://data-seed-prebsc-1-s2.binance.org:8545/'] },
    public: { http: ['https://data-seed-prebsc-1-s2.binance.org:8545/'] },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 17422483,
    },
  },
  testnet: true,
}

export const baseTest: Chain = {
  id: 84531,
  name: 'Base Chain Testnet',
  network: 'base-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Base Chain Token',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://goerli.base.org'] },
    public: { http: ['https://data-seed-prebsc-1-s2.binance.org:8545/'] },
  },
  blockExplorers: {
    default: { name: 'BaseScan', url: 'https://1rpc.io/base-goerli	' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 1376988,
    },
  },
  testnet: true,
}

export { mainnet, goerli }
