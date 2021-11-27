import React from "react";
import "./MessagesWindow.scss";

function MessagesWindow(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.comments.map((c, id) => (
          <li key={id}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesWindow;
