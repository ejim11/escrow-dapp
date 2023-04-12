import { toast } from "react-toastify";
import { BsPatchCheckFill } from "react-icons/bs";

export const toastSuccess = (msg) => {
  toast.success(msg, {
    hideProgressBar: true,
    autoClose: 2000,
    icon: <BsPatchCheckFill className="text-color-btn w-[2rem] h-[2rem]" />,
  });
};

export const toastError = (msg) => {
  toast.error(msg, {
    hideProgressBar: true,
    autoClose: 2000,
  });
};
