import React from "react";
import { Col, Image } from "react-bootstrap";
import "./StepsCard.css";

const StepsCard = ({ step }) => {
  // Destructure Step

  const { img, title, desc } = step;

  return (
    <Col md="6" lg="4" className="mt-5">
      <div className="step-card">
        <Image draggable="false" src={img}></Image>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </Col>
  );
};

export default StepsCard;
