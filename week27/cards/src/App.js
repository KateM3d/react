import React from "react";

import "./App.css";
import "./components/Card.scss";
import Card from "./components/Card";

let items = [
  {
    classTop: "cardTop_300",
    classCenter: "cardCenter_300",
    planName: "Unlimited 300",
    cost: 300,
    speed: "10Mb/sec",
  },
  {
    classTop: "cardTop_450",
    classCenter: "cardCenter_450",
    planName: "Unlimited 450",
    cost: 450,
    speed: "10Mb/sec",
  },
  {
    classTop: "cardTop_550",
    classCenter: "cardCenter_550",
    planName: "Unlimited 550",
    cost: 550,
    speed: "10Mb/sec",
  },
  {
    classTop: "cardTop_1000",
    classCenter: "cardCenter_1000",
    planName: "Unlimited 1000",
    cost: 1000,
    speed: "10Mb/sec",
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        {items.map((item) => (
          <Card
            key={item.classTop}
            classTop={item.classTop}
            classCenter={item.classCenter}
            planName={item.planName}
            cost={item.cost}
            speed={item.speed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
