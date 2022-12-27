import React from "react";
import { Image } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import spinner from "../../images/spinner.png";
import "./Spinner.css";

const Spinner2 = () => {
  return (
    <div className="spinner d-flex justify-content-center align-items-center">
      <p>L</p>
      <Image src={spinner}></Image>
      <p>ading</p>
      <Spinner animation="grow" variant="success sp1" />
      <Spinner animation="grow" variant="danger sp2" />
      <Spinner animation="grow" variant="info sp3" />
    </div>


  );
};

export default Spinner2;
