import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const walletConnect = new WalletConnectConnector({
  rpc: { 250: "https://rpcapi.fantom.network/" },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  infuraId: "12351ae7b81b4899bf671dfc4f732b16",
});
