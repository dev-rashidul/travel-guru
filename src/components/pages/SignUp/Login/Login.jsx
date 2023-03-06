import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import loginImg from "../../../../images/login-img.svg";
import SpinnerSmall from "../../../Spinners/SpinnerSmall";

const Login = () => {
  // Checkbox State
  const [checked, setChecked] = useState(false);

  // Error State
  const [error, setError] = useState("");

  // Get Register Firebase auth using Context
  const { userLogin, googleLogin, loading, setLoading } =
    useContext(AuthContext);

  // Function for Checkbox
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const googleLoginHandler = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setLoading(false);
      })

      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title> Travel Guru - Login</title>
      </Helmet>
      <div className="register">
        <div className="register-wrapper">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                <div className="register-form">
                  <h3>Login Here</h3>
                  <Container>
                    <form onSubmit={loginHandler}>
                      <label>Email Address</label>
                      <FloatingLabel
                        controlId="floatingEmail"
                        label="Enter Email"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                          required
                        />
                      </FloatingLabel>
                      <label>Password</label>
                      <FloatingLabel
                        controlId="floatingPassword"
                        label="Enter Password"
                      >
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                          required
                        />
                      </FloatingLabel>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          className="mt-4"
                          onClick={handleChecked}
                          type="checkbox"
                          label="Accept Terms and Conditions"
                        />
                      </Form.Group>
                      <span className="text-danger text-start m-0">
                        {error}
                      </span>
                      <Button
                        className="submit-btn"
                        type="submit"
                        disabled={!checked}
                      >
                        {loading ? <SpinnerSmall></SpinnerSmall> : "Login"}
                      </Button>
                      <Button
                        onClick={googleLoginHandler}
                        className="google-btn"
                      >
                        Login with Google <FaGoogle></FaGoogle>
                      </Button>
                      <p>
                        New in Travel Guru?{" "}
                        <Link to="/register">Register here</Link>
                      </p>
                    </form>
                  </Container>
                </div>
              </Col>
              <Col md="6">
                <div className="register-img">
                  <Image draggable="false" src={loginImg}></Image>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
