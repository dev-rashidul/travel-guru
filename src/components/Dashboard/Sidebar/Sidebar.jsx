import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import { HiBookOpen, HiOutlineArrowRightOnRectangle, HiUserGroup } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  // Get user info from Context
  const { user, logOut, role } = useContext(AuthContext);

  // Log Out Function
  const logoutHandler = () => {
    logOut();
  };

  return (
    <>
      {isOpen && (
        <div id="Sidebar">
          <div className="sidebar-wrapper position-relative">
            <div className="user-info text-center">
              <Image src={user?.photoURL}></Image>
              <h3>{user?.displayName}</h3>
              <p>{user?.email}</p>
            </div>
            <div className="sidebar-menu">
              <ul>
                {role === "admin" ? (
                  <li>
                    <HiUserGroup></HiUserGroup>
                    <Link to="/dashboard/all-users">All Users</Link>
                  </li>
                ) : (
                  <li>
                    <HiBookOpen></HiBookOpen>
                    <Link to="/dashboard/my-bookings">My Bookings</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="logout">
              <span onClick={logoutHandler}>
                <HiOutlineArrowRightOnRectangle></HiOutlineArrowRightOnRectangle>
                Log Out
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
