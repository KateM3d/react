import React from "react";
import { useState } from "react";
import "./Button.scss";

function Button() {
  const [send, setSend] = useState(false);
  const inputField = document.querySelector(".inputMessage");
  let postMessage = () => {
    setSend(!send);
    console.log("send");
  };
  return (
    <>
      <button onClick={postMessage} className="btn">
        Send
      </button>
    </>
  );
}

export default Button;
