import React from "react";
import { Image } from "react-bootstrap";

const BookingsTable = ({ booking }) => {
  // Destructuring Booking Data
  const { image, name, price } = booking;

  return (
    <>
      <tr>
        <td>
          <Image style={{width: "70px", height: "70px", borderRadius: "50%", objectFit: "cover"}} src={image}></Image>
        </td>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          {" "}
          <button style={{background: "none", border: "none", color: "#ff0000" }}>Delete</button>{" "}
        </td>
      </tr>
    </>
  );
};

export default BookingsTable;
