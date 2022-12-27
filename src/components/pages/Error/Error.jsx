import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../../images/error.gif";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <Image className="img-fluid" src={error}></Image>
      <div className="error-btn text-center">
        <Link to="/">Go To Home</Link>
      </div>
    </div>
  );
};

export default Error;
