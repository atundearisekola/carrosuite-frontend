import React from "react";
import peopleIcon from "../assets/people.png";
const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card__header-container">
        <div className="card__item card_item-img">
          <img className="card__img" src={peopleIcon} />
        </div>
        <span className="card__item card__item-title"></span>
      </div>
      <div className="card__content-container">
        <h1 className="card__content">{props.title}</h1>
      </div>
    </div>
  );
};

export default Card;
