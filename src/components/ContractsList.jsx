import React from "react";
import empty from "../assets/undraw_no_data_re_kwbl.svg";
import ContractItem from "./ContractItem";
import { useSelector } from "react-redux";

const ContractsList = () => {
  const contractsList = useSelector((state) => state.escrow.contractsList);

  return (
    <div className="flex flex-col h-[35rem] sm:h-[40rem]  border shadow-sm rounded-lg border-color-border bg-color-white">
      <p className="border-b border-color-border  font-semibold text-3xl p-6 text-color-dark-blue-2">
        Existing contracts
      </p>
      {contractsList.length === 0 && (
        <div className="flex items-center justify-center w-full h-full flex-col">
          <p className="mb-2 text-2xl text-color-light-blue">
            No Contracts Deployed
          </p>
          <img src={empty} alt="empty list" className="w-[15rem] h-[15rem]" />
        </div>
      )}
      {contractsList.length > 0 && (
        <div className="scroll overflow-y-auto h-100% pb-3">
          {contractsList.map((contractItem, i) => (
            <ContractItem
              contractItem={contractItem}
              key={i}
              length={contractsList.length}
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContractsList;
