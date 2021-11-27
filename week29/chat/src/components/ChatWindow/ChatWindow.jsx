import React from "react";
import "./ChatWindow.scss";
// import { useState } from "react";

import MessagesWindow from "../MessagesWindow/MessagesWindow";
import TypeWindow from "../TypeWindow/TypeWindow";
import Button from "../Button/Button";

function ChatWindow() {
  return (
    <div>
      <div className="container">
        <MessagesWindow />
      </div>
      <div className="inputText">
        <TypeWindow />
      </div>
      <Button />
    </div>
  );
}

export default ChatWindow;
