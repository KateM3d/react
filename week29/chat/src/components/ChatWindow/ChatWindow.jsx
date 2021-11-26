import React from "react";
import "./ChatWindow.scss";

import MessagesWindow from "../MessagesWindow/MessagesWindow";
import TypeWindow from "../TypeWindow/TypeWindow";
import Button from "../Button/Button";

function ChatWindow() {
  return (
    <div>
      <div class="container">
        <MessagesWindow />
      </div>
      <div class="inputText">
        <TypeWindow />
      </div>
      <Button />
    </div>
  );
}

export default ChatWindow;
