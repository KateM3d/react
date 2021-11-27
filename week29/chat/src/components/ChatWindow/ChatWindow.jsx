import React from "react";
import "./ChatWindow.scss";
import { useState } from "react";

import MessagesWindow from "../MessagesWindow/MessagesWindow";
import TypeWindow from "../TypeWindow/TypeWindow";
import Button from "../Button/Button";

function ChatWindow() {
  const [, setComments] = useState([]); //comments list
  const [newComment, setNewComment] = useState(""); //new comment
  // const handleOnChange = (e) => setNewComment(e.target.value);
  // const badWordsCollection = ["viagra", "xxx"];
  let newValue;
  const handleOnChange = (e) => {
    newValue = e.target.value;
    console.log(newValue);

    // if (e.target.value.trim().length === 0) {
    //   e.target.value = "";
    //   alert("Please enter your message");
    // } else {
    //   let str = e.target.value;
    //   let trimmedStr = str.trim();
    //   let inputWords = trimmedStr.trim().replace(/\s+/g, " ").split(" ");
    //   console.log(inputWords);

    //   for (let i = 0; i < badWordsCollection.length; i++) {
    //     replaceBadWord(inputWords, badWordsCollection[i]);
    //   }

    //   e.target.value = "";
    // }

    // function replaceBadWord(inputWords, badWord) {
    //   for (let i = 0; i < inputWords.length; i++) {
    //     if (inputWords[i].toLowerCase() === badWord.toLowerCase()) {
    //       inputWords[i] = "***";
    //     }
    //   }
    // }

    setNewComment(newValue);
  };

  const handleOnClick = () => {
    const newComments = [...comments];
    newComments.push(newComment);
    setComments(newComments);

    console.log(newComment);
  };
  return (
    <div>
      <div className="container">
        <MessagesWindow comments={comments} />
      </div>
      <div className="inputText">
        <TypeWindow onChange={handleOnChange} value={newComment} />
      </div>
      <Button onClick={handleOnClick} />
    </div>
  );
}

export default ChatWindow;
