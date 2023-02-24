import React, { useEffect, useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import vacationIcon from "../../../../images/vacation-icon.svg";
import SingleVacation from "./SingleVacation";
import "./Vacation.css";

const Vacation = () => {
  // Vacation State
  const [vacations, setVacations] = useState();

  // Get Vacation Data from Backend
  useEffect(() => {
    fetch(`https://travel-server-steel.vercel.app/vacations`)
      .then((res) => res.json())
      .then((data) => setVacations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="vacation">
      <div className="vacation-wrapper">
        <Container>
          <div className="section-top position-relative">
            <h2>
              Best <span>vacation plan</span>
            </h2>
            <p>
              Plan your perfect vacation with our travel agency. Choose among
              hundreds of all-inclusive offers!{" "}
            </p>
            <div className="vacation-shape">
              <Image draggable="false" src={vacationIcon}></Image>
            </div>
          </div>
          <Row className="justify-content-center">
            {vacations?.map((vacation) => (
              <SingleVacation
                key={vacation._id}
                vacation={vacation}
              ></SingleVacation>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Vacation;
