import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero from "../../../../images/hero.png";
import PrimaryButton from "../../../Button/PrimaryButton";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero-wrapper pt-100">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="hero-content">
                <h1>Travel, enjoy and live a new and full life</h1>
                <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
                <Link to='/tours' className="d-block mt-4"><PrimaryButton>Explore Now</PrimaryButton></Link>
              </div>
            </Col>
            <Col md={6} className="mt-5 mt-md-0">
              <div className="hero-img">
                <Image draggable="false" className="img-fluid" src={hero}></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
