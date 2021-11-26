import React from "react";
import "./TypeWindow.scss";

function TypeWindow() {
  return (
    <div className="inputText">
      <input
        className="inputMessage"
        type="text"
        placeholder="Type your message here..."
      />
    </div>
  );
}

export default TypeWindow;
