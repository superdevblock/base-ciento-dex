import memoize from 'lodash/memoize'
import { ChainId } from '@pancakeswap/sdk'
import { bsc, bscTest, goerli, baseTest } from '@pancakeswap/wagmi/chains'
import { BinanceWalletConnector } from '@pancakeswap/wagmi/connectors/binanceWallet'
import { configureChains, createClient } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { SafeConnector } from 'wagmi/connectors/safe'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const CHAINS = [
  // bsc,
  // bscTest,

  // TODO: ETH
  // mainnet,
  // goerli,
  baseTest,
]

const PUBLIC_NODES = {
  [ChainId.BSC]: 'https://bsc-dataseed1.binance.org',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [ChainId.GOERLI]: 'https://eth-goerli.public.blastapi.io',
}

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (process.env.NODE_ENV === 'test' && chain.id === mainnet.id) {
        return { http: 'https://cloudflare-eth.com' }
      }
      return PUBLIC_NODES[chain.id] ? { http: PUBLIC_NODES[chain.id] } : { http: chain.rpcUrls.default.http[0] ?? '' }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: { shimDisconnect: false },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'Ciento',
    appLogoUrl: 'https://pancakeswap.com/logo.png',
  },
})

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId: 'a8484965e51b13ed38231ce86f3ed69c',
    metadata: {
      name: 'SwapV2',
      description: 'This is Swap V2 fork from pancake',
      url: 'https://nhancv.com',
      icons: ['https://i0.wp.com/nhancv.com/wp-content/uploads/2020/10/cropped-17565440.png'],
    },
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: { shimDisconnect: false },
})

export const bscConnector = new BinanceWalletConnector({ chains })

const safeConnector = new SafeConnector({
  chains,
  options: {
    allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
    debug: false,
  },
})

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    bscConnector,
    safeConnector,
  ],
})

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId))
export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet)
