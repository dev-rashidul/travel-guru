import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Discount.css";
import DiscountCard from "./DiscountCard/DiscountCard";

const Discount = () => {
  // Discount State
  const [discounts, setDiscounts] = useState([]);

  // Load Discoutns Data using Axios
  useEffect(() => {
    axios
      .get("https://travel-server-steel.vercel.app/discounts")
      .then((res) => {
        setDiscounts(res.data);
      });
  }, []);

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
          <Row className="justify-content-center">
            {discounts.map((discount) => (
              <DiscountCard
                key={discount._id}
                discount={discount}
              ></DiscountCard>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Discount;
