import React from "react";
import './Card.css';

const Card = (props) => {

//adding the deafault classes to the Card Component//
const classes = 'card '+ props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;