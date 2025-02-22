import * as React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";
import ConnectModal from "./connectModal";

const walletDetails = [
  { name: "Phantom", logo: "/images/phantom.png", phraseNumber: 12 },
  { name: "Solflare", logo: "/images/solflare.png", phraseNumber: 24 },
  { name: "Metamask", logo: "/images/metamask.png", phraseNumber: 12 },
  { name: "Coinbase", logo: "/images/coinbase.png", phraseNumber: 12 },
  { name: "Trust Wallet", logo: "/images/trust_wallet.jpg", phraseNumber: 12 },
  { name: "Ledger", logo: "/images/ledger.png", phraseNumber: 24 },
  { name: "Argent", logo: "/images/argent.jpg", phraseNumber: 12 },
  { name: "Coinomi", logo: "/images/coinomi.jpg", phraseNumber: 24 },
  { name: "Electrum", logo: "/images/electrum.png", phraseNumber: 12 }, // Can be custom
  { name: "Math Wallet", logo: "/images/math_wallet.jpg", phraseNumber: 12 },
  { name: "Atomic", logo: "/images/atomic.jpg", phraseNumber: 12 },
  { name: "Exodus", logo: "/images/exodus.png", phraseNumber: 12 },
  { name: "Gridplus", logo: "/images/gridplus.jpg", phraseNumber: 24 },
  { name: "Avax", logo: "/images/avax.png", phraseNumber: 24 },
  { name: "Safepal", logo: "/images/safepal.jpg", phraseNumber: 12 },
  {
    name: "Bridge Wallet",
    logo: "/images/bridge_wallet.jpg",
    phraseNumber: 12,
  },
  { name: "Polkadot", logo: "/images/polkadot.jpg", phraseNumber: 12 },
  { name: "Keplr", logo: "/images/keplr.png", phraseNumber: 12 },
  { name: "Terra Station", logo: "/images/terra.png", phraseNumber: 24 },
  { name: "Wallet Connect", logo: "/images/walle.jpg", phraseNumber: 12 }, // Depends on linked wallet
  { name: "Midas", logo: "/images/midas_wallet.jpg", phraseNumber: 12 },
  { name: "Shido", logo: "/images/shido.png", phraseNumber: 12 },
  { name: "Bitkeep", logo: "/images/bitkeep.jpg", phraseNumber: 12 },
  { name: "Cool Wallet", logo: "/images/cool_wallet_s.jpg", phraseNumber: 24 },
  { name: "Cosmos", logo: "/images/cosmos.png", phraseNumber: 24 },
  { name: "Fantom", logo: "/images/fantom.png", phraseNumber: 12 },
  { name: "Klev", logo: "/images/klev.png", phraseNumber: 12 },
  { name: "Tangem", logo: "/images/tangem.png", phraseNumber: 12 },
  { name: "Rainbow", logo: "/images/rainbow.jpg", phraseNumber: 12 },
  { name: "Polygon Wallet", logo: "/images/polygon.jpg", phraseNumber: 12 },
  { name: "Stacks", logo: "/images/stacks.png", phraseNumber: 24 },
  { name: "Walleth", logo: "/images/walleth.jpg", phraseNumber: 12 },
  { name: "Bitpay", logo: "/images/bitpay.jpg", phraseNumber: 12 },
  { name: "Keyring Pro", logo: "/images/keyring_pro.jpg", phraseNumber: 12 },
  { name: "Coin98", logo: "/images/coin98.jpg", phraseNumber: 12 },
  { name: "1inch", logo: "/images/1inch.jpg", phraseNumber: 12 },
  { name: "MYKEY", logo: "/images/mykey.jpg", phraseNumber: 12 },
  { name: "Best Wallet", logo: "/images/best.jpg", phraseNumber: 12 },
  { name: "imToken", logo: "/images/imtoken.jpg", phraseNumber: 12 },
  { name: "Maiar Wallet", logo: "/images/maiarwallet.png", phraseNumber: 24 },
];

interface Walletdata {
  name: string;
  logo: string;
  phraseNumber: number | null;
}

export default function BasicModal({
  openModal,
  handleClose,
}: {
  openModal: boolean;
  handleClose: () => void;
}) {
  const [wallets, setWallets] = React.useState(walletDetails);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [connectModal, setConnectModal] = React.useState(false);
  const [selectedWallet, setSelectWallet] = React.useState<Walletdata>({
    name: "",
    logo: "",
    phraseNumber: null,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filteredWallets = walletDetails.filter((wallet) =>
      wallet.name.toLowerCase().includes(value.toLowerCase())
    );

    setWallets(filteredWallets);
  };
  const handeleConnectModal = (data: {
    name: string;
    logo: string;
    phraseNumber: number;
  }) => {
    handleClose();
    setConnectModal(true);
    setSelectWallet(data);
  };

  const closeConnectModal = () => {
    console.log(searchTerm)
    setConnectModal(false);
  };
  return (
    <div>
      <ConnectModal
        selected={selectedWallet}
        openModal={connectModal}
        handleClose={closeConnectModal}
      />
      <Modal
        open={openModal}
        onClose={() => {
          handleClose();
          setWallets(walletDetails);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[90%] md:w-[400px] rounded-lg bg-white border border-slate-800 p-4 min-h-[380px] overflow-auto"
        >
          <div className="flex justify-start relative ">
            <button
              onClick={() => {
                handleClose();
                setWallets(walletDetails);
              }}
              className="absolute w-fit right-0 "
            >
              <CloseOutlinedIcon sx={{ color: "gray", fontSize: "22px" }} />
            </button>
            <div className="flex items-center gap-2">
              <AccountBalanceWalletOutlinedIcon />
              <h1 className="text-start font-medium">Select Your Wallet</h1>
            </div>
          </div>

          <input
            className="w-full h-8 text-lg border p-1 border-b-[1px] outline-none border-t-0 border-l-0 border-r-0 my-3"
            type="text"
            onChange={handleSearch}
            placeholder=" search..."
          />
          <div className="h-[270px] rounded-lg overflow-scroll">
            {wallets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 md:flex-row">
                {wallets.map((wallet, index) => (
                  <button
                    onClick={() => handeleConnectModal(wallet)}
                    key={index}
                    className="hover:bg-slate-50 rounded-lg border p-2 flex gap-3 w-full items-center"
                  >
                    <div className="rounded-md h-8 w-8 relative overflow-hidden">
                      <Image src={wallet.logo} fill alt={wallet.name} sizes="32px"/>
                    </div>
                    <p>{wallet.name}</p>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-4">No results found</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
