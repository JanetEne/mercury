import React from "react";
import "./styles.scss";

interface InputProps {
  type: string;
  placeholder: string;
  trailing?: JSX.Element | string;
}

const InputComponent: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, placeholder, trailing, ...rest }) => {
  return (
    <div className="inputContainer">
      <input type={type} placeholder={placeholder} {...rest} />
      <div className="trailingText">{trailing}</div>
    </div>
  );
};

export default InputComponent;
