import Escrow from "./components/Escrow";
import connect from "./components/utils/connectWallet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatchFn = useDispatch();

  const account = useSelector((state) => state.escrow.account);

  return (
    <div className="bg-app">
      <header className="flex w-full  items-center h-[7rem] px-[4rem] sm:px-[2rem]  shadow-sm justify-between ">
        <h2 className="font-bold uppercase text-[2rem] text-color-dark-blue-2">
          Arbiter
        </h2>
        <button
          className="border outline-none text-2xl shadow-sm border-color-border py-2 px-4 rounded-md font-semibold capitalize bg-color-btn text-color-white"
          onClick={() => {
            connect(dispatchFn);
          }}
        >
          {account
            ? `connected ${account.slice(0, 5)}...${account.slice(40, 42)}`
            : "connect wallet"}
        </button>
      </header>
      <Escrow />
      <ToastContainer limit={1} autoClose={2000} />
    </div>
  );
}

export default App;
