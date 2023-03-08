import React from "react";
import { Container, Row } from "react-bootstrap";
import './Discount.css';

const Discount = () => {
  // Load Discoutns Data using React Query

  return (
    <section id="Discount">
      <div className="discounts-wrapper">
        <Container>
          <div className="section-top position-relative">
            <h2>
              Exclusive <span>deals & discounts</span>
            </h2>
            <p>
              Discover our fantastic early booking discounts & start planning
              your journey.
            </p>
          </div>
          <Row className="justify-content-center"></Row>
        </Container>
      </div>
    </section>
  );
};

export default Discount;
