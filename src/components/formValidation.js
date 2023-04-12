export const inputValidators = {
  address: {
    required: "address is required",
    minLength: {
      value: 40,
      message: "Password must have at least 40 characters",
    },
    maxLength: {
      value: 42,
      message: "Password cannot be greater than 42 characters",
    },
  },
  deposit: {
    required: "deposit is required",
    minLength: {
      value: 1,
      message: "Password must have at least 20 characters",
    },
    maxLength: {
      value: 20,
      message: "Password cannot be greater than 20 characters",
    },
  },
};
