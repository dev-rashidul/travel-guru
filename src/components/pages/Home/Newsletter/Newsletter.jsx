import React from "react";
import { Container, Image } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import newsletterShape from "../../../../images/newsletter-shape.svg";
import PrimaryButton from "../../../Button/PrimaryButton";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section id="Newsletter">
      <Container>
        <div className="newsletter-wrapper position-relative">
          <div className="newsletter-content">
            <h2>Subscribe and get exclusive deals & offer</h2>
            <div className="newsletter-form pt-4">
              <form>
                <div className="newsletter-filed">
                  <div className="newsletter-input">
                    <span>
                      <FaRegEnvelope></FaRegEnvelope>
                    </span>
                    <input type="text" placeholder="Enter your mail" />
                  </div>
                  <div className="newsletter-btn">
                      <PrimaryButton>Subscribe</PrimaryButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="newsletter-shape">
            <Image draggable="false" src={newsletterShape}></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
