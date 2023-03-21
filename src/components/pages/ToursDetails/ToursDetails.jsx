import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import PrimaryButton from "../../Button/PrimaryButton";
import "./TourDetails.css";

const ToursDetails = () => {
  // Get Logged In User Email
  const { user } = useContext(AuthContext);

  // Recieve Data using useLoaderData

  const tour = useLoaderData();

  //   Destucturing Tour Data

  const { name, image, days, price, rating } = tour;

  const addBookings = () => {
    // Making Bookings Object

    const bookings = {
      booking_email: user?.email,
      image: image,
      name: name,
      price: price,
    };

    // Post Bookings to Database

    fetch("https://travel-server-steel.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged)
          swal("Good job!", "Book Successfully", "success");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* React Helmet for dynamic Title */}

      <Helmet>
        <title> Travel Guru - Tour Details</title>
      </Helmet>

      <section id="TourDetails">
        <div className="tour-details-wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <div className="tour-details-info">
                  <div className="tour-details-img">
                    <Image src={image}></Image>
                  </div>
                  <div className="tour-details-content">
                    <h2 className="pt-3">{name}</h2>
                    <hr />
                    <h5>$ {price}</h5>
                    <hr />
                    <p>
                      {" "}
                      <FaLocationArrow></FaLocationArrow> {days}
                    </p>
                    <hr />
                    <p>
                      {" "}
                      <FaStar></FaStar> {rating}
                    </p>
                  </div>
                  <div
                    onClick={addBookings}
                    className="d-flex justify-content-center"
                  >
                    <PrimaryButton>Book Now</PrimaryButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ToursDetails;
