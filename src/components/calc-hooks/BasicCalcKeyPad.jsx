import React from "react";
import Keyboard from "./Keyboard";
import Key from "./Key";

const BasicCalcKeyPad = (props) => {
  return (
    <div className="w-80 flex flex-wrap justify-center border">
      {Keyboard.map((keyboard, index) => (
        <div key={index}>
          <Key
            id={keyboard.id}
            onClick={(e) => {
              props.onClick(e.target.id);
            }}
            keyboard={keyboard.keyboard}
          />
        </div>
      ))}

      {/* <button
          id="7"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          7
        </button>
        <button
          id="8"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          8
        </button>
        <button
          id="9"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          9
        </button>

        <button
          id="/"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          /
        </button>
        <button
          id="backspace"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          ←
        </button>
        <button
          id="c"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          c
        </button>
      </p>

      <p>
        <button
          id="4"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          4
        </button>
        <button
          id="5"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          5
        </button>
        <button
          id="6"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          6
        </button>

        <button
          id="*"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          *
        </button>
        <button
          id="("
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          (
        </button>
        <button
          id=")"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          )
        </button>
      </p>

      <p>
        <button
          id="1"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          1
        </button>
        <button
          id="2"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          2
        </button>
        <button
          id="3"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          3
        </button>

        <button
          id="-"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          -
        </button>
        <button
          id="square"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          x²
        </button>
        <button
          id="squareroot"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          √
        </button>
      </p>
      <p>
        <button
          id="0"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          0
        </button>
        <button
          id="."
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          .
        </button>
        <button
          id="%"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          %
        </button>

        <button
          id="+"
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          +
        </button>
        <button
          id="="
          onClick={(e) => {
            props.onClick(e.target.id);
          }}
          className="border"
        >
          =
        </button> */}
    </div>
  );
};

export default BasicCalcKeyPad;
