import { createSlice, current } from "@reduxjs/toolkit";

const storedContractList = localStorage.getItem("contractList");

const escrowSlice = createSlice({
  name: "escrow",
  initialState: {
    signer: null,
    account: null,
    contractsList: JSON.parse(storedContractList) || [],
  },
  reducers: {
    setSigner(state, action) {
      state.signer = action.payload;
    },
    setAccount(state, action) {
      state.account = action.payload;
    },
    addContractToList(state, action) {
      state.contractsList = [action.payload, ...state.contractsList];
      localStorage.setItem("contractList", JSON.stringify(state.contractsList));
    },
    approveContract(state, action) {
      const contractIndex = state.contractsList.findIndex(
        (contract) => contract.id === action.payload
      );

      state.contractsList[contractIndex].approved = true;

      localStorage.setItem("contractList", JSON.stringify(state.contractsList));
    },
  },
});

export const escrowAction = escrowSlice.actions;

export default escrowSlice.reducer;
