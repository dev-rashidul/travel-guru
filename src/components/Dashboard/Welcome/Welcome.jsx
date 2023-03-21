import React from "react";
import { Image } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import welcome from "../../../images/welcome.svg";
import "./Welcome.css";

const UserWelcome = () => {
  return (
    <>
      {/* React Helmet for dynamic Title */}

      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <div className="welcome">
        <h2>Welcom to Dashboard</h2>
        <Image draggable="false" src={welcome}></Image>
      </div>
    </>
  );
};

export default UserWelcome;
