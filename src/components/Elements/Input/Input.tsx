import React, { useState, forwardRef } from "react";
import { Icon } from "@iconify/react";
import "./Input.scss";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: any;
  className?: string;
  label?: string;
  icon?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = "text",
    placeholder = "placeholder",
    value,
    name,
    onChange,
    className,
    icon = "bi:envelope",
    required = false
  } = props;

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleIconClick = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <label
      className={`input outline-none flex items-center gap-2 bg-gray ${className}`}>
      {type !== "password" && (
        <Icon
          icon={icon}
          width={25}
          height={25}
        />
      )}
      <input
        ref={ref}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        name={name}
        onChange={onChange}
        className="grow"
        required={required}
      />
      {type === "password" && (
        <Icon
          icon={isPasswordVisible ? "bi:eye-fill" : "bi:eye-slash-fill"}
          width={25}
          height={25}
          onClick={handleIconClick}
          className="cursor-pointer"
        />
      )}
    </label>
  );
});

export default Input;
