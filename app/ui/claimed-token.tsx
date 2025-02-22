"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Base58 characters (used in Solana addresses)
const BASE58_ALPHABET =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

// Function to generate a random Solana wallet address
const generateSolanaAddress = () => {
  let address = "";
  for (let i = 0; i < 44; i++) {
    address += BASE58_ALPHABET.charAt(
      Math.floor(Math.random() * BASE58_ALPHABET.length)
    );
  }
  return address;
};

// Function to randomly select a SOL amount
const getRandomSOL = () => {
  const solValues = [0.5, 1, 2, 3, 4, 5];
  return solValues[Math.floor(Math.random() * solValues.length)];
};

// Snackbar component
const Snackbar = ({ address, sol }: { address: string; sol: number }) => {
  return (
    <motion.div
      layout // Enables smooth stacking transitions
      initial={{ opacity: 0, y: -30 }} // Start from top
      animate={{ opacity: 1, y: 0 }} // Slide down smoothly
      exit={{ opacity: 0, y: -20 }} // Exit slightly upward
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed -z-10 right-2 mg:right-5 top-2 md:top-5 w-fit md:w-[400px] text-center bg-slate-900/90 text-white border border-slate-800 shadow-lg rounded-lg px-2 py-4"
    >
      <p className="text-sm md:text-base font-medium">
        <span className="font-mono text-blue-400">
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>{" "}
        has bought {sol} SOL worth of $RAT
      </p>
    </motion.div>
  );
};

export default function WalletSnackbar() {
  const [snackbars, setSnackbars] = useState<
    { id: number; address: string; sol: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAddress = generateSolanaAddress();
      const sol = getRandomSOL();
      const id = Date.now(); // Unique ID

      setSnackbars((prev) => {
        const updatedSnackbars = [...prev, { id, address: newAddress, sol }];
        return updatedSnackbars.slice(-2); // Keep only the last 2 notifications
      });

      // Remove the oldest after 3.5 seconds
      setTimeout(() => {
        setSnackbars((prev) => prev.filter((snack) => snack.id !== id));
      }, 3500);
    }, 4000); // Generate a new address every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed w-full h-full z-[9999] pointer-events-none top-5 right-5 flex flex-col space-y-2">
      <AnimatePresence mode="popLayout">
        {snackbars.map((snack) => (
          <Snackbar key={snack.id} address={snack.address} sol={snack.sol} />
        ))}
      </AnimatePresence>
    </div>
  );
}
