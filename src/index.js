import App from "./components/App.svelte";
import * as nearAPI from "near-api-js";
import getConfig from "./config";

async function initCrossword() {
  const nearConfig = getConfig(process.env.NEAR_ENV || "testnet"); // object json
  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
  const near = await nearAPI.connect({ keyStore, ...nearConfig });
  const walletConnection = new nearAPI.WalletConnection(near);
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = walletConnection.getAccountId();
  }
  return { nearConfig, walletConnection, currentUser };
}

let app;

initCrossword().then((data) => {
  app = new App({
    target: document.body,
    props: {
        nearConfig: data.nearConfig,
        walletConnection: data.walletConnection,
        currentUser: data.currentUser,
    },
  });
});

export default app;
