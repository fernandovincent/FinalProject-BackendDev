import React from "react";

const Input = ({ placeholder, ...rest }) => {
  return (
    <div>
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;