import React, { Component } from "react";

class BasicCalcKeyPad extends Component {
  handler = (e) => {
    this.props.onClick(e.target.id);
  };

  render() {
    return (
      <>
        <div>
          <p>
            <button
              id="7"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              7
            </button>
            <button
              id="8"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              8
            </button>
            <button
              id="9"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              9
            </button>

            <button
              id="/"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              /
            </button>
            <button
              id="backspace"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              ←
            </button>
            <button
              id="c"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              c
            </button>
          </p>

          <p>
            <button
              id="4"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              4
            </button>
            <button
              id="5"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              5
            </button>
            <button
              id="6"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              6
            </button>

            <button
              id="*"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              *
            </button>
            <button
              id="("
              onClick={(e) => {
                this.handler(e);
              }}
            >
              (
            </button>
            <button
              id=")"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              )
            </button>
          </p>

          <p>
            <button
              id="1"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              1
            </button>
            <button
              id="2"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              2
            </button>
            <button
              id="3"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              3
            </button>

            <button
              id="-"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              -
            </button>
            <button
              id="square"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              x²
            </button>
            <button
              id="squareroot"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              √
            </button>
          </p>

          <p>
            <button
              id="0"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              0
            </button>
            <button
              id="."
              onClick={(e) => {
                this.handler(e);
              }}
            >
              .
            </button>
            <button
              id="%"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              %
            </button>

            <button
              id="+"
              onClick={(e) => {
                this.handler(e);
              }}
            >
              +
            </button>
            <button
              id="="
              onClick={(e) => {
                this.handler(e);
              }}
            >
              =
            </button>
          </p>
        </div>
      </>
    );
  }
}

export default BasicCalcKeyPad;
