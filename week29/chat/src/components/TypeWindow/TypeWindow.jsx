import React from "react";
import "./TypeWindow.scss";

function TypeWindow(props) {
  return (
    <div className="inputText">
      <input
        value={props.value}
        onChange={props.onChange}
        className="inputMessage"
        type="text"
        placeholder="Type your message here..."
      />
    </div>
  );
}

export default TypeWindow;
