import React from "react";

const Button = ({ id, onClick, button }) => {
  return (
    <div>
      <button id={id} onClick={onClick} className="Button">
        {button}
      </button>
    </div>
  );
};

export default Button;
