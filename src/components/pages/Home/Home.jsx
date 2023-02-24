import React from "react";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Steps from "./Steps/Steps";
import Vacation from "./Vacation/Vacation";

const Home = () => {
  return (
    <>
      {/* Hero Section JSX Start */}

      <Hero></Hero>

      {/* Hero Section JSX End */}

      {/* Steps Section JSX Start */}

      <Steps></Steps>

      {/* Steps Section JSX End */}

      {/* Vacation Section JSX Start */}

      <Vacation></Vacation>

      {/* Vacation Section JSX End */}

      {/* Newsletter Section JSX Start */}

      <Newsletter></Newsletter>

      {/* Newsletter Section JSX End */}
      
    </>
  );
};

export default Home;
