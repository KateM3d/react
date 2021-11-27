import React from "react";
import "./TypeWindow.scss";

function TypeWindow(props) {
  return (
    <div className="inputText">
      <input
        value={props.comments}
        onChange={props.handleOnChange}
        className="inputMessage"
        type="text"
        placeholder="Type your message here..."
      />
    </div>
  );
}

export default TypeWindow;
