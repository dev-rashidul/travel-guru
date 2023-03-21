import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./AllUser.css";
import UserTable from "./UserTable/UserTable";

const AllUsers = () => {
  // Users State
  const [users, setUsers] = useState([]);

  // Get All Users

  useEffect(() => {
    fetch(`https://travel-server-steel.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      {/* React Helmet for dynamic Title */}

      <Helmet>
        <title> Dashboard - All User</title>
      </Helmet>

      <section id="All-users">
        <div className="users-wrapper">
          <Container>
            <div className="user-title py-5">
              <h2>All Users</h2>
            </div>
            <Row>
              <div className="user-table">
                <table className="w-100">
                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <UserTable key={user._id} user={user}></UserTable>
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

export default AllUsers;
