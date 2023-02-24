import React from "react";
import { Col, Image } from "react-bootstrap";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import './SingleVacation.css';

const SingleVacation = ({ vacation }) => {
  // Destructure Object
  const { name, image, price, days, rating } = vacation;

  return (
    <Col md="6" lg="4" className="mt-5">
      <div className="vacation-item">
        <div className="vacation-img">
          <Image className="w-100" src={image}></Image>
        </div>
        <div className="vacation-item-content p-4">
          <div className="d-flex justify-content-between">
            <h4>{name}</h4>
            <h5>${price}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              {" "}
              <span>
                <FaLocationArrow></FaLocationArrow>
              </span>{" "}
              {days}
            </p>
            <h6><span><FaStar></FaStar></span>{rating}</h6>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleVacation;
