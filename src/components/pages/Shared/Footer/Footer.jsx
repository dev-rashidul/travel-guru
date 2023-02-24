import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section id="Footer">
        <div className="footer-wrapper">
          <Container>
            <Row>
              <Col md="6" lg="4">
                <div className="footer-about">
                  <Link to="/" className="logo">
                    <span>Travel</span>Guru
                    <Image draggable="false" src={logo}></Image>
                  </Link>
                  <p>
                    Book your trip in minute, get full Control for much longer.
                  </p>
                  <div className="footer-social">
                    <Link><FaFacebookF></FaFacebookF></Link>
                    <Link><FaInstagram></FaInstagram></Link>
                    <Link><FaTwitter></FaTwitter></Link>
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

export default Footer;
