import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div>
      {props.selected === true ? (
        <div className="circle">
          <div className="cardBody">
            <div className={props.classTop}>{props.planName}</div>
            <div className={props.classCenter} style={props.center}>
              $ <p className="number">{props.cost}</p> /per month
            </div>
            <div className="cardSpeed">{props.speed}</div>
            <div className="cardTraffic">
              Included traffic<br></br> volume is unlimited
            </div>
          </div>
        </div>
      ) : (
        <div className="cardBody">
          <div className={props.classTop}>{props.planName}</div>
          <div className={props.classCenter} style={props.center}>
            $ <p className="number">{props.cost}</p> /per month
          </div>
          <div className="cardSpeed">{props.speed}</div>
          <div className="cardTraffic">
            Included traffic<br></br> volume is unlimited
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
