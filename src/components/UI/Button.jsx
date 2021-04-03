import React from "react";

const Button = ({ id, onClick, button }) => {
  return (
    <button id={id} onClick={onClick} className="Button">
      {button}
    </button>
  );
};

export default Button;
