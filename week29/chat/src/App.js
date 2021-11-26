import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
