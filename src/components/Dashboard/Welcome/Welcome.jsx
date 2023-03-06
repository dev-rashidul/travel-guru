import React from "react";
import { Image } from "react-bootstrap";
import welcome from "../../../images/welcome.svg";
import './Welcome.css';

const UserWelcome = () => {
  return (
    <>
      <div className="welcome">
        <h2>Welcom to Dashboard</h2>
        <Image draggable="false" src={welcome}></Image>
      </div>
    </>
  );
};

export default UserWelcome;
