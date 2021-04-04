import React from "react";

const Button = ({ id, type, onClick, button }) => {
  return (
    <button id={id} type={type} onClick={onClick} className="Button">
      {button}
    </button>
  );
};

export default Button;
