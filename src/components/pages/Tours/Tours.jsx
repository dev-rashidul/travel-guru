import React from "react";
import { Helmet } from "react-helmet-async";
import Discoutn from "../Home/Discount/Discount";
import Vacation from "../Home/Vacation/Vacation";

const Tours = () => {
  return (
    <>
      {/* React Helmet for dynamic Title */}

      <Helmet>
        <title> Travel Guru - Tours and Travels</title>
      </Helmet>

      {/* Vacation Plan */}

      <Vacation></Vacation>

      {/* Discoutn & Deals */}

      <Discoutn></Discoutn>
    </>
  );
};

export default Tours;
