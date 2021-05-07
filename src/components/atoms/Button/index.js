import React from 'react';
import App from '../../../App.css';

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button type="button" className="btn btn-primary form-control button" onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
