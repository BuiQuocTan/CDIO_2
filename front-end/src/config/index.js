import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
 coinbasewallet: {
   package: CoinbaseWalletSDK, 
   options: {
     appName: "Web 3 Modal Demo",
     infuraId: process.env.INFURA_KEY
   }
 },
 walletconnect: {
   package: WalletConnect, 
   options: {
     infuraId: process.env.INFURA_KEY
   }
 }
};

export const contractAddress = {
  1: '',
  56: '',
  5: '0x07b85258EDB07dD7f3258163f3BdCbB4333447D3',
  // 97: '0xe79A9a94d5C17fcEaE646461D00322586Cbdf590',
  1337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  80001: "0x9402F4E2604640eb8e677114959CF77ab8e8F1E5",
}

export const supported_network = {
  1: {
    chainName: 'ETH Mainnet',
    chainId: '0x1',
    nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
    rpcUrls: ['https://rpc.ankr.com/eth']
  }, 
  56: {
    chainName: 'BSC Mainnet',
    chainId: '0x38',
    nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
    rpcUrls: ['https://bsc-dataseed3.ninicoin.io']
  }, 
  5: {
    chainName: 'GORLI Testnet',
    chainId: '0x5',
    nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
    rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161']
  },
  // 97: {
  //   chainName: 'BSC Testnet',
  //   chainId: '0x61',
  //   nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
  //   rpcUrls: ['https://bsc-testnet.public.blastapi.io']
  // },
  31337: {
    chainName: 'Hardhat',
    chainId: '0x7A69',
    nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
    rpcUrls: ['http://localhost:8545']
  },
  80001: {
    chainName: 'Polygon Testnet',
    chainId: '0x13881',
    nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/']
  }
}

export const datafeed = 'http://localhost:5000/api'
export const ownerAddress = '0xf8a8f21Dd299e77CA4A4Cb9faE10898c89F6fB04'