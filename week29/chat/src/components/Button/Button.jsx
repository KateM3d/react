import React from "react";
// import { useState } from "react";
import "./Button.scss";

function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className="btn">
        Send
      </button>
    </>
  );
}

export default Button;
