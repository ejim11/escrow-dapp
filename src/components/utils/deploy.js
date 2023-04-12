import { ethers } from "ethers";
import PaymentEscrow from "../../artifacts/PaymentEscrow";

export default async function deploy(signer, arbiter, beneficiary, deposit) {
  const contractFactory = new ethers.ContractFactory(
    PaymentEscrow.abi,
    PaymentEscrow.bytecode,
    signer
  );

  const depositInWei = deposit * 1e18;

  return contractFactory.deploy(arbiter, beneficiary, {
    value: depositInWei.toString(),
  });
}
