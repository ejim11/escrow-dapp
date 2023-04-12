import React from "react";
import { useSelector } from "react-redux";
import { TbClipboardCopy } from "react-icons/tb";
import { toastSuccess } from "./utils/toastFunctions";

const ContractItem = ({ contractItem, length, index }) => {
  const signer = useSelector((state) => state.escrow.signer);

  const items = [
    {
      title: "contract",
      val: `${contractItem.contractAddress.slice(
        0,
        7
      )}...${contractItem.contractAddress.slice(
        contractItem.contractAddress.length - 5
      )}`,
      copy: true,
    },
    {
      title: "arbiter",
      val: `${contractItem.arbiter.slice(0, 7)}...${contractItem.arbiter.slice(
        contractItem.arbiter.length - 5
      )}`,
      copy: false,
    },
    {
      title: "beneficiary",
      val: `${contractItem.beneficiary.slice(
        0,
        7
      )}...${contractItem.beneficiary.slice(
        contractItem.beneficiary.length - 5
      )}`,
      copy: false,
    },
    {
      title: "deposit",
      val: `${contractItem.value} MATIC`,
      copy: false,
    },
  ];

  const copyHandler = (address) => {
    toastSuccess("contract address copied");
    navigator.clipboard.writeText(address);
  };

  return (
    <div
      className={`flex flex-col w-full   p-6 ${
        length - 1 === index ? "" : "shadow-md"
      }`}
    >
      {items.map((item, i) => (
        <div className="flex items-center w-full" key={i}>
          <p className="font-semibold text-[1.6rem] mr-4 uppercase text-color-dark-blue">
            {item.title} :
          </p>
          <p className="text-[1.5rem] break-all">{item.val}</p>
          {item.copy && (
            <TbClipboardCopy
              className="w-[2rem] h-[2rem] text-color-dark-blue ml-auto cursor-pointer hover:text-color-light-blue"
              onClick={() => {
                copyHandler(contractItem.contractAddress);
              }}
            />
          )}
        </div>
      ))}
      <div className="flex mt-4 justify-between items-center">
        <a
          href="https://mumbai.polygonscan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[45%] sm:w-[48%] py-3 bg-color-btn text-color-white text-[1.4rem] rounded-lg text-center font-semibold"
        >
          Visit Polygonscan
        </a>
        <button
          onClick={() => {
            contractItem.handleApprove(signer);
          }}
          className="w-[45%] sm:w-[48%] py-3 bg-color-btn text-color-white text-[1.4rem] rounded-lg font-semibold"
        >
          {contractItem.approved ? "Approved" : "Approve"}
        </button>
      </div>
    </div>
  );
};

export default ContractItem;
