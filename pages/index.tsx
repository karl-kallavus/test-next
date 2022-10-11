import { useState } from "react";
import { ExtensionsProvider } from "cirque/dist/providers";
import { TransfersProvider } from "cirque/dist/providers";
import { WalletConnect } from "cirque/dist/components/wallet";
import { Transfer } from "cirque/dist/components/transfer";
import { getExtensions } from "cirque/dist/util/extensions/polkadotJS/getExtensions";
import { runTransfer } from "cirque/dist/util/transfer/capi/runTransfer";
import { Account } from "cirque/dist/components/transfer/types";

const DAPP_NAME = "UI3";

function App() {
  const [selectedAccount, onChange] = useState<Account | undefined>(undefined);

  return (
    <ExtensionsProvider>
      <TransfersProvider>
        <div className="global-theme px-20 py-5 bg-gray-50 min-h-screen">
          <div className="flex items-center justify-end mb-20">
            <WalletConnect
              getExtensions={getExtensions(DAPP_NAME)}
              {...{ selectedAccount, onChange }}
            />
          </div>
          <div className="flex items-center justify-center">
            <Transfer
              runTransfer={runTransfer}
              {...{ selectedAccount, onChange }}
            />
          </div>
        </div>
      </TransfersProvider>
    </ExtensionsProvider>
  );
}

export default App;
