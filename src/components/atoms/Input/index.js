import React from "react";
import App from '../../../App.css';

const Input = ({ placeholder, ...rest }) => {
  return (
    <div className="input">
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;