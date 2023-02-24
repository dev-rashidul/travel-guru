import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import moneyIcon from "../../../../images/money-icon.svg";
import signUpIcon from "../../../../images/sign-up-icon.svg";
import stepShape from "../../../../images/steps-shape.svg";
import travelIcon from "../../../../images/travel-icon.svg";
import './Steps.css';
import StepsCard from "./StepsCard/StepsCard";


const steps = [
  {
    id: 1,
    img: signUpIcon,
    title: "Sign Up",
    desc: "Completes all the work associated with planning and processing",
  },
  {
    id: 2,
    img: moneyIcon,
    title: "Worth of Money",
    desc: "After successful access then book from exclusive deals & pricing",
  },
  {
    id: 3,
    img: travelIcon,
    title: "Exciting Travel",
    desc: "Start and explore a wide range of exciting travel experience.",
  },
];


const Steps = () => {
  return (
    <section id="Steps">
      <div className="steps-wrapper">
        <Container>
          <div className="section-top position-relative">
            <h2>
              Things you need <span>to do</span>
            </h2>
            <p>
              We ensure that you’ll embark on a perfectly planned, safe vacation
              at a price you can afford.
            </p>
            <div className="step-shape">
              <Image draggable="false" src={stepShape}></Image>
            </div>
          </div>
          <Row>
            {steps?.map((step) => (
              <StepsCard key={step.id} step={step}></StepsCard>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Steps;
