import { ethers } from "ethers";
import { escrowAction } from "../../escrowSlice";
import { toastError } from "./toastFunctions";

const provider = new ethers.BrowserProvider(window.ethereum);

async function connect(dispatchFn) {
  if (window.ethereum !== undefined) {
    try {
      const accounts = await provider.send("eth_requestAccounts", []);

      dispatchFn(escrowAction.setAccount(accounts[0]));

      const signer = await provider.getSigner();

      dispatchFn(escrowAction.setSigner(signer));
    } catch (err) {
      // toastError(`${err.message}`)
    }
  } else {
    toastError("Install Metamask!");
  }
}

export default connect;
