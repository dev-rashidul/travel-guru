import React from "react";
import { Col, Image } from "react-bootstrap";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../Button/PrimaryButton";
import "./DiscountCard.css";

const DiscountCard = ({ discount }) => {
  // Destructring Object
  const { _id, image, name, location, regular_price, discount_price, rating } =
    discount;

  return (
    <Col md="6" lg="3" className="mt-5">
      <div className="discount-item">
        <div className="discount-img position-relative">
          <Image draggable="false" className="w-100" src={image}></Image>
          <div className="view-btn">
            <Link to={`/discount/${_id}`}>
              <PrimaryButton>Book Now</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className="discount-item-content p-4">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <h6>
              <span>
                <FaStar></FaStar>
              </span>
              {rating}
            </h6>
          </div>
          <div className="d-flex justify-content-between pt-3">
            <p>
              <span>
                <FaLocationArrow></FaLocationArrow>
              </span>
              {location}
            </p>
            <div className="discount-price d-flex">
              <h5>${regular_price}</h5>
              <h6>${discount_price}</h6>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DiscountCard;
