import React from "react";
import "./ChatWindow.scss";
import { useState } from "react";

import MessagesWindow from "../MessagesWindow/MessagesWindow";
import TypeWindow from "../TypeWindow/TypeWindow";
import Button from "../Button/Button";

function ChatWindow() {
  const [comments, setComments] = useState([]); //comments list
  const [newComment, setNewComment] = useState(""); //new comment
  const handleOnChange = (e) => setNewComment(e.target.value);

  const handleOnClick = () => {
    const newComments = [...comments];
    newComments.push(comments);
    setComments(newComment);

    console.log(newComments);
  };
  return (
    <div>
      <div className="container">
        <MessagesWindow comments={comments} />
      </div>
      <div className="inputText">
        <TypeWindow onChange={handleOnChange} />
      </div>
      <Button onClick={handleOnClick} />
    </div>
  );
}

export default ChatWindow;
