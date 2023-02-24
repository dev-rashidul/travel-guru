import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="Footer">
        <div className="footer-wrapper">
          <Container>
            <Row>
              <Col md="6" lg="3">
                <div className="footer-about">
                  <Link to="/" className="logo">
                    <span>Travel</span>Guru
                    <Image draggable="false" src={logo}></Image>
                  </Link>
                  <p>
                    Book your trip in minute, get full Control for much longer.
                  </p>
                  <div className="footer-social">
                    <li>
                      <Link to="/">
                        <FaFacebookF></FaFacebookF>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaInstagram></FaInstagram>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaTwitter></FaTwitter>
                      </Link>
                    </li>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3" className="mt-5 mt-md-0">
                <div className="footer-menu">
                  <h5>Company</h5>
                  <div className="footer-nav pt-4">
                    <ul>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Careers</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy & Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3" className="mt-5 mt-lg-0">
                <div className="footer-menu">
                  <h5>Contact</h5>
                  <div className="footer-nav pt-4">
                    <ul>
                      <li>
                        <Link to="/">Help/FAQ</Link>
                      </li>
                      <li>
                        <Link to="/">Press</Link>
                      </li>
                      <li>
                        <Link to="/">Affilates</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md="6" lg="3" className="mt-5 mt-lg-0">
                <div className="footer-menu">
                  <h5>More</h5>
                  <div className="footer-nav pt-4">
                    <ul>
                      <li>
                        <Link to="/">Airline</Link>
                      </li>
                      <li>
                        <Link to="/">Airlinefees</Link>
                      </li>
                      <li>
                        <Link to="/">Low fare tips</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <div className="footer-copyright d-md-flex justify-content-between">
              <p>Copyright, Travel Guru 2023. All rights reserved.</p>
              <Link to="/">Terms & Conditions</Link>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Footer;
