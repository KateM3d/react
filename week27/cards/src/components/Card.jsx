import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="cardBody">
      <div className={props.classTop}>{props.planName}</div>
      <div className={props.classCenter} style={props.center}>
        $ {props.cost} /per month
      </div>
      <div className="cardSpeed">{props.speed}</div>
      <div className="cardTraffic">
        Volume of the included<br></br> traffic is unlimited
      </div>
    </div>
  );
}

export default Card;
