import "./Card.css";

function Card(props) {
  return (
    <div className="page-inner">
      <div className="card-single">
        <img className="hero-image" src={props.image} alt={props.name} />
        <h3 className="hero-name">{props.name}</h3>
        <h4 className="hero-universe">{props.universe}</h4>
        <h4 className="hero-realname">{props.realName}</h4>
        <h5 className="hero-job">{props.job}</h5>
        <h5 className="hero-friends">{props.friends}</h5>
        <h4 className="hero-superPowers">{props.superPowers}</h4>
        <p className="hero-moreInfo">{props.moreInfo}</p>
      </div>
    </div>
  );
}

export default Card;
