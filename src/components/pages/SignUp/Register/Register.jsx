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
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import register from "../../../../images/register-img.svg";
import SpinnerSmall from "../../../Spinners/SpinnerSmall";
import "./Register.css";

const Register = () => {
  // Checkbox State
  const [checked, setChecked] = useState(false);

  // Error State
  const [error, setError] = useState("");

  // Get Register Firebase auth using Context
  const { createUser, googleLogin, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);

  // Navigate and Location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // Register Function
  const registerHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;
    const role = "user";

    // Image from ImgBB

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=a61a3a6da2973ff4fbd64d7248e67456`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            updateUserProfile(name, data.data.display_url);
            saveUser(name, email, role);
            console.log(user);
            form.reset();
            setLoading(false);
            swal("Good job!", "Registration Successful", "success");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
            swal("Bad Luck!", `${error.message}`, "error");
            setLoading(false);
          });
      });
  };

  const saveUser = (name, email, role) => {
    const user = {
      name,
      email,
      role,
    };
    fetch(`https://travel-server-steel.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {/* React Helmet for dynamic Title */}

      <Helmet>
        <title> Travel Guru - Register</title>
      </Helmet>
      <div className="register">
        <div className="register-wrapper">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                <div className="register-img">
                  <Image draggable="false" src={register}></Image>
                </div>
              </Col>
              <Col md="6">
                <div className="register-form">
                  <h3>Register Here</h3>
                  <Container>
                    <form onSubmit={registerHandler}>
                      <label>Name</label>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Enter Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </FloatingLabel>
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
                      <label>Profile Picture</label>
                      <br />
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        required
                      />
                      <br />
                      <br />
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
                        {loading ? <SpinnerSmall></SpinnerSmall> : "Register"}
                      </Button>
                      <Button
                        onClick={googleLoginHandler}
                        className="google-btn"
                      >
                        Register with Google <FaGoogle></FaGoogle>
                      </Button>
                      <p>
                        Already have an account?{" "}
                        <Link to="/login">Login here</Link>
                      </p>
                    </form>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Register;
