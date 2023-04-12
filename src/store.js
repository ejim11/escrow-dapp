import { configureStore } from "@reduxjs/toolkit";
import escrowReducer from "./escrowSlice";

const store = configureStore({
  reducer: {
    escrow: escrowReducer,
  },
});

export default store;
