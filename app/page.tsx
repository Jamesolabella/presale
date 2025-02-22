"use client";
import Image from "next/image";
import ratlogo from "@/public/images/rat.png";
import { useState } from "react";
import { Chart } from "./ui/chart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Claimed from "./ui/claimed-token";
import BasicModal from "./ui/modal";

export default function Page() {
  const [sol, setSol] = useState(0.5);
  const [open, setopen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleDropDown = () => {
    setopen(!open);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="min-h-screen h-full overflow-scroll bg-gradient-to-br from-slate-900 via-black to-black flex justify-center p-3 md:p-6">
        <Claimed />
        <div className="rounded-2xl relative p-3 md:p-10 h-fit bg-gradient-to-br backdrop-blur-sm border-slate-800 from-slate-900 to-black  w-full max-w-4xl mt-24 border">
          <div
            className="absolute
            inset-0 bg-gradient-to-r w-full from-cyan-500/5 to-transparent
            rounded-2xl"
          ></div>
          <div
            className="absolute -top-1 -bottom-1 -left-1
            -right-1 bg-gradient-to-b from-cyan-500/20 to-transparent
            rounded-2xl blur-xl opacity-20"
          ></div>
          <div className="absolute flex items-center -top-[75px] w-full left-0 justify-center">
            <div className="absolute w-[132px] h-[132px] mt-[6px] -ml-[5px] rounded-full border-[2px] border-[#3a539f] shadow-[0_0_20px_rgba(52,52,108,0.81)]]"></div>

            <Image
              src={ratlogo}
              width={140}
              height={140}
              alt="rat logo"
              priority
              className="rounded-full filter drop-shadow-[0_0_10px_rgba(70,190,241,0.8)]"
            />
          </div>

          <div className="w-full mt-24 grid gap-10 grid-cols-1 md:grid-cols-2">
            <div className="w-full ">
              <div className="flex items-center gap-1">
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(70,190,241)"
                  className="w-12 h-12 "
                  style={{
                    filter: "drop-shadow(0px 0px 15px rgba(70, 190, 241, 0.8))",
                  }}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="rgb(70,190,241)"
                      d="M433.5 31.6c-8.5 0-15.1 6.58-15.1 14.81s6.6 14.81 15.1 14.81 15.1-6.58 15.1-14.81S442 31.6 433.5 31.6zM267 59.05c6.6 15.84 17.1 18.03 31.1 24.77-11.2 20.98-23.2 51.08-43.5 59.28-64.7 26.1-98.7 58.3-112.3 98.7-13.1 39-7 87.2 13.3 145.4 61.8 4.9 127.3 9.2 159.4 2.8-1.3-4.4-5.8-7.5-8.6-9-28.5-9.8-45.2-10.9-71.5-12l1.1-9.6c2.2-19.6.4-44.3-7.7-61.3-4.1-8.5-9.5-14.9-16.5-18.8-7-3.9-15.8-5.7-28.4-3.3l-3.2-17.8c13.5-2.4 29.4-.6 40.4 5.4 10.9 6.1 18.7 15.8 23.9 26.7 9.1 18.9 11.1 41.6 9.9 61.8 10 .6 18.9 1.6 26.8 2.9 19.2-30.7 37-60.4 39.5-90.7-13.8-4-32.4-10.7-34.3-24.4-2.7-19.6 3.6-45 19.3-55.5-1 27.8-4.3 43.9-2.3 49.7 5.8 10.9 30.3 15.2 40.1 17.4v.1c17.4 4.8 31.9 7 34.8 25.6 18.2-29.5-14.4-45-36.2-54.5l-.1-5.8c-.3-23.5 5.5-39.4 13.5-53.1 8-13.6 17.7-25 26.9-43.2v-.1c-9.4-1.3-19.4-.1-27.1 1.3 5.7-19.9 23.2-23.73 38.6-16.1 5.9-8.3 13.4-18.83 24.9-29.96-12.7-9.39-19.9-20.4-18.1-33.92-28-3.4-57.4-4.45-78.6 9.84l-4-3.72c-15.7-17.87-60.9-12.3-51.1 11.11zm67.9-4.17c4 7.92 14.9 12.95 29.2 13.88-8 6.49-20.7 11.42-30.3 5.24-7.3-4.71-3.7-13.07 1.1-19.12zM129.4 364.6c-14.6 3.2-38.77 7-49.63 16-8.5 7.4-15.03 19.8-16.19 31.4-1.17 11.6 1.99 21.6 12.85 28.8C120 469.7 165 466.4 205.4 454.9c40.4-11.6 75.4-32.6 119.4-22.8 8.4 2.5 15.7 6.5 14.5 15.9-.4 2.8-1.5 4.8-2.7 6.5-9.7 10.8-30.9 17.7-33.6 21.5-6.4 9.2 34.2 2.8 45-7.6 4.2-4.2 8.1-13 8.9-21.3.8-8.3-1.3-15.3-4.9-18.3-11.2-9.6-24.1-15.1-39.8-15.1-15.7-.1-34 1.7-53.5 6.5-39.1 9.6-83.6 27.5-127.4 18.6-17-3.4-27.4-6.8-33.77-14.9-3.22-4-4.39-10.6-2.48-15.4 7.45-15.2 28.15-17.8 40.95-20.5-2.4-7.2-4.6-16.4-6.6-23.4z"
                    ></path>
                  </g>
                </svg>
                <div>
                  <h1 className="text-[rgb(63,154,193)] font-bold text-4xl">
                    $RAT
                  </h1>
                </div>
                <div>
                  <div className="rounded-3xl border border-slate-500 text-[rgb(63,154,193)] font-semibold py-[6px] px-4 animate-pulse">
                    PRE-SALE LIVE
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 h-fit border rounded-xl mt-6 border-slate-800">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles self-start w-5
                    h-5 text-[rgb(70,190,241)]"
                  >
                    <path
                      d="m12 3-1.912 5.813a2 2 0 0
                      1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12
                      21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2
                      2 0 0 1-1.275-1.275L12 3Z"
                    ></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path
                      d="M17
                      19h4"
                    ></path>
                  </svg>

                  <h2 className="text-white font-semibold">
                    About $RAT (Republican Against Trump)
                  </h2>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  $RAT is the first official memecoin for Republicans who reject
                  trump, A mix of meme culture & real activism. Crypto-powered
                  resistance with airdrops, donations & satire. <br />
                  Drain the swamp, one $RAT at a time!
                </p>
              </div>
              <div className="bg-slate-900/50 h-fit p-4  border rounded-xl mt-6 border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400">Presale Progress</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-white
                        font-semibold"
                    >
                      4217 SOL
                    </span>
                    <span className="text-slate-500">/</span>
                    <span className="text-slate-400">10 000 SOL</span>
                  </div>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-700
                      to-cyan-600 rounded-full transition-all duration-500"
                    style={{ width: "45%" }}
                  >
                    <div
                      className="w-full h-full
                        bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0)_40%)]
                        animate-shine"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className="grid
                  grid-cols-2 gap-4 mt-6"
              >
                <div
                  className="bg-slate-900/50 p-4 rounded-xl
                    border border-slate-800"
                >
                  <div
                    className="flex items-center gap-2
                      mb-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trending-up w-4 h-4
                        text-[rgb(70,190,241)]"
                    >
                      <polyline
                        points="22 7 13.5 15.5 8.5
                          10.5 2 17"
                      ></polyline>
                      <polyline
                        points="16 7 22 7 22
                          13"
                      ></polyline>
                    </svg>
                    <span
                      className="text-slate-400
                        text-sm"
                    >
                      Rate
                    </span>
                  </div>
                  <p
                    className="text-white
                      font-medium"
                  >
                    1 SOL = 99,500 RAT
                  </p>
                </div>
                <div
                  className="bg-slate-900/50 p-4 rounded-xl border
                    border-slate-800"
                >
                  <span
                    className="text-slate-400 text-sm block
                      mb-1"
                  >
                    Total Supply
                  </span>
                  <p
                    className="text-white
                      font-medium"
                  >
                    1,000,000,000 RAT
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="space-y-4 bg-slate-900/50 p-4
                rounded-xl border border-slate-800"
              >
                <h3
                  className="text-white
                  font-semibold mb-4"
                >
                  How to Participate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-500/10 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-wallet w-5 h-5 text-[rgb(70,190,241)]"
                      >
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                        <path
                          d="M3
                          5v14a2 2 0 0 0 2 2h16v-5"
                        ></path>
                        <path
                          d="M18 12a2 2 0
                          0 0 0 4h4v-4Z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Step 1: Select Amount
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Choose how many SOL you want to put in $RAT
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex
                    items-start gap-3"
                  >
                    <div
                      className="bg-slate-500/10 p-2
                      rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-check w-5 h-5
                        text-[rgb(70,190,241)]"
                      >
                        <path
                          d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0
                          0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                        ></path>
                        <path
                          d="M14 2v4a2
                          2 0 0 0 2 2h4"
                        ></path>
                        <path d="m9 15 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Step 2: Sign Transaction
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Confirm and sign the transaction with your wallet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="bg-slate-500/10
                      p-2 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-coins w-5 h-5 text-[rgb(70,190,241)] "
                      >
                        <circle cx="8" cy="8" r="6"></circle>
                        <path
                          d="M18.09 10.37A6 6
                          0 1 1 10.34 18"
                        ></path>
                        <path d="M7 6h1v4"></path>
                        <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Step 3: Claim Tokens
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Once presale ends, claim your $RAT tokens
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className=" bg-slate-900/50 p-4 mt-6
                rounded-xl border border-slate-800"
              >
                <div className="relative">
                  <div>
                    <button
                      onClick={handleDropDown}
                      className="w-full flex items-center justify-between bg-slate-800/50 px-4 py-3 rounded-lg text-white hover:bg-[#27354b] transition-colors group"
                    >
                      <div>
                        <span className="text-sm text-slate-400 block mb-1">
                          Amount to Purchase
                        </span>
                        <span
                          id="selectedValue"
                          className="text-lg font-medium"
                        >
                          {sol} SOL
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform group-hover:text-white"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <div
                      className={` ${
                        open ? "h-[148px]" : "h-0"
                      }  mt-3 absolute rounded-lg  transition-all duration-300 ease-linear overflow-y-scroll z-10 `}
                    >
                      <div
                        className={` bg-[#1e293b] 
                          w-full rounded-lg `}
                      >
                        <button
                          onClick={() => {
                            setSol(0.5);
                            setopen(!open);
                          }}
                          className="w-full text-left text-white p-3 hover:bg-[#27354b]"
                        >
                          0.5 SOL
                        </button>
                        <button
                          onClick={() => {
                            setSol(1);
                            setopen(!open);
                          }}
                          className="w-full text-left text-white p-3 hover:bg-[#27354b]"
                        >
                          1 SOL
                        </button>
                        <button
                          onClick={() => {
                            setSol(2);
                            setopen(!open);
                          }}
                          className="w-full text-left text-white p-3 hover:bg-[#27354b]"
                        >
                          2 SOL
                        </button>
                        <button
                          onClick={() => {
                            setSol(3);
                            setopen(!open);
                          }}
                          className="w-full text-left text-white p-3 hover:bg-[#27354b]"
                        >
                          3 SOL
                        </button>
                        <button
                          onClick={() => {
                            setSol(4);
                            setopen(!open);
                          }}
                          className="w-full text-left text-white p-3 hover:bg-[#27354b]"
                        >
                          4 SOL
                        </button>
                        <button
                          onClick={() => {
                            setSol(5);
                            setopen(!open);
                          }}
                          className="w-full text-left text-white p-3 hover:bg-[#27354b]"
                        >
                          5 SOL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenModal(true)}
                  className="relative overflow-hidden w-full bg-gradient-to-r mt-4
                from-cyan-500 to-cyan-400 text-black font-bold py-4 rounded-lg
                flex items-center justify-center gap-2 transition-all
                transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
                before:absolute before:top-0 before:left-[-100%] before:w-[150%]
                before:h-full before:bg-white/20 before:opacity-50 before:skew-x-[-20deg]
                before:animate-shine"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wallet w-5 h-5"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>

          <div
            className="w-full bg-slate-900/50 p-4 mt-6
                rounded-xl border border-slate-800 h-fit"
          >
            <span className="text-slate-400">Allocation</span>
            <div className="flex flex-col md:flex-row items-center">
              <Chart />
              <div className="w-full">
                <ul>
                  <li className="flex gap-3 items-center">
                    <div className="size-4 bg-[rgb(70,190,241)] inline-block"></div>{" "}
                    <span className=" text-sm text-slate-400">
                      50% Liquidity Pool
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="size-4 bg-[#ec0000] inline-block"></div>{" "}
                    <span className="text-sm text-slate-400">
                      20% Community & Airdrops
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="size-4 bg-[white] inline-block"></div>{" "}
                    <span className="text-sm text-slate-400">
                      15% Marketing & Partnerships
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="size-4 bg-[#4ade80] inline-block"></div>{" "}
                    <span className="text-sm text-slate-400">
                      10% Treasury for Donations/Political Action
                    </span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="size-4 bg-[#3C3B6E] inline-block"></div>{" "}
                    <span className="text-sm text-slate-400">
                      5% Team & Development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="relative mt-8 pt-6 border-t border-slate-800/50 flex
            items-center justify-between"
          >
            <div
              className="flex items-center gap-2
              text-sm text-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-timer w-4 h-4
                text-cyan-500"
              >
                <line x1="10" x2="14" y1="2" y2="2"></line>
                <line x1="12" x2="15" y1="14" y2="11"></line>
                <circle cx="12" cy="14" r="8"></circle>
              </svg>
              <span>Presale ends in 3 days 14 hours</span>
            </div>
            <a
              href="https://x.com/orangie_web3"
              target="_blank"
              rel="noopener
              noreferrer"
              className="text-slate-400 hover:text-cyan-500 text-sm
              flex items-center gap-2 transition-colors group"
            >
              RAT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link w-4 h-4 transition-transform
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path
                  d="M18
                  13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="z-50 bg-slate-900/50 flex justify-center items-center rounded-s-3xl h-7 w-7 fixed bottom-10 right-0 border border-slate-800"
        >
          <KeyboardArrowUpIcon sx={{ color: "#94a3b8" }} />
        </button>
      </div>
      <BasicModal openModal={openModal} handleClose={handleClose} />
    </>
  );
}
