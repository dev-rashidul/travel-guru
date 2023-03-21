import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import BookingsTable from "./BookingsTable/BookingsTable";
import "./MyBookings.css";

const MyBookings = () => {
  // Get Logged In User from Context
  const { user } = useContext(AuthContext);

  // Bookings State
  const [bookings, setBookings] = useState([]);

  // Get All Bookings
  useEffect(()=> {
    fetch(`https://travel-server-steel.vercel.app/dashboard/my-bookings?booking_email=${user?.email}`)
    .then(res => res.json())
    .then(data => setBookings(data))
  }, [user])

  console.log(bookings)

  return (
    <>
      {/* React Helmet for dynamic Title */}

      <Helmet>
        <title> Dashboard - My Bookings</title>
      </Helmet>

      <section id="All-users">
        <div className="users-wrapper">
          <Container>
            <div className="user-title py-5">
              <h2>My Bookings</h2>
            </div>
            <Row>
              <div className="user-table">
                <table className="w-100">
                  <thead>
                    <tr>
                      <td>Image</td>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <BookingsTable
                        key={booking._id}
                        booking={booking}
                      ></BookingsTable>
                    ))}
                  </tbody>
                </table>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default MyBookings;
