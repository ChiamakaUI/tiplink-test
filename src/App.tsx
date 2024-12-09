import { WalletConnectButton } from "@tiplink/wallet-adapter-react-ui";
import "./App.css";
import { WalletProviders } from "./context/wallet";

function App() {
  return (
    <WalletProviders>
      <WalletConnectButton />
    </WalletProviders>
  );
}

export default App;
