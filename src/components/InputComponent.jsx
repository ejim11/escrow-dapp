import React from "react";

const InputComponent = ({
  label,
  placeholder,
  type,
  register,
  error,
  name,
  validation,
  disabled,
  className,
}) => {
  return (
    <div className="flex flex-col mb-[2rem] bg-color-white">
      <label htmlFor={name} className="mb-2 font-medium uppercase text-2xl">
        {label}
      </label>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`border border-color-border rounded-lg px-8 py-4 w-full `}
      />
      {error && error[name] && (
        <small className="text-color-red text-xl mt-2">
          {error[name].message}
        </small>
      )}
    </div>
  );
};

export default InputComponent;
