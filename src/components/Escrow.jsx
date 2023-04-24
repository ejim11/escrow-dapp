import React from "react";
import InputComponent from "./InputComponent";
import { useForm } from "react-hook-form";
import { inputValidators } from "./formValidation";
import ContractsList from "./ContractsList";
import deploy from "./utils/deploy";
import { useSelector, useDispatch } from "react-redux";
import { escrowAction } from "../escrowSlice";
import { toastSuccess } from "./utils/toastFunctions";

export async function approve(escrowContract, signer) {
  const approveTxn = await escrowContract.connect(signer).approve();
  await approveTxn.wait();
}

const Escrow = () => {
  const signer = useSelector((state) => state.escrow.signer);

  const dispatchFn = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      arbiter: "",
      beneficiary: "",
      deposit: "",
    },
  });

  const submitPayment = async (data) => {
    if (Number(data.deposit) <= 0) {
      return;
    }
    const { arbiter, beneficiary, deposit } = data;
    const escrowContract = await deploy(signer, arbiter, beneficiary, deposit);
    const receipt = await escrowContract.deploymentTransaction().wait();

    escrowContract.on("Approved", () => {
      console.log("approved");
      dispatchFn(escrowAction.approveContract(receipt.blockNumber));
      toastSuccess("Contract Approved");
    });

    const escrow = {
      id: receipt.blockNumber,
      contractAddress: escrowContract.target,
      arbiter,
      beneficiary,
      value: deposit,
      approved: false,
      handleApprove: async (arbiterSigner) => {
        await approve(escrowContract, arbiterSigner);
      },
    };

    dispatchFn(escrowAction.addContractToList(escrow));
  };

  return (
    <section className="grid grid-cols-2 md:grid-cols-1 gap-x-[15rem] lg:gap-x-[5rem] md:gap-x-0 md:gap-y-[5rem] pt-[4rem] px-[7rem] md:px-[3rem] w-full h-[calc(100vh-7rem)] md:h-max md:pb-[5rem]">
      <form onSubmit={handleSubmit(submitPayment)} noValidate className="h-max">
        <InputComponent
          placeholder={"0x...."}
          type={"text"}
          label={"arbiter address"}
          register={register}
          name={"arbiter"}
          validation={inputValidators.address}
          disabled={false}
          error={errors}
        />
        <InputComponent
          placeholder={"0x...."}
          type={"text"}
          label={"beneficiary address"}
          register={register}
          name={"beneficiary"}
          validation={inputValidators.address}
          disabled={false}
          error={errors}
        />
        <InputComponent
          placeholder={"1"}
          type={"text"}
          label={"deposit amount (in matic)"}
          register={register}
          name={"deposit"}
          validation={inputValidators.deposit}
          disabled={false}
          error={errors}
        />
        <button
          type="submit"
          className="text-center py-6 text-[1.6rem] text-color-white bg-color-btn w-full rounded-lg mt-4 font-semibold border border-color-btn hover:bg-color-white hover:text-color-btn transition-all duration-300 ease-in"
        >
          Deploy
        </button>
      </form>
      <ContractsList />
    </section>
  );
};

export default Escrow;
