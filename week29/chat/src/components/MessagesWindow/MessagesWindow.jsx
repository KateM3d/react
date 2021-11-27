import React from "react";
import "./MessagesWindow.scss";

function MessagesWindow(props) {
  return (
    <div>
      <ul>
        {props.comments.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesWindow;
