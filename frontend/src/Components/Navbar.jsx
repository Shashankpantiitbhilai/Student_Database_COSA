import React, { useContext } from "react";
import axios from "axios";
import { Button, Col, Navbar } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { AdminContext } from "../App";

function CustomNavbar() {
  const { IsUserLoggedIn, setIsUserLoggedIn } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/auth/logout",
        {},
        { withCredentials: true },
      );
      setIsUserLoggedIn(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Navbar className="justify-content-between nav text-dark">
      <Col xs="auto">
        <img
          src="/Logo_of_IIT_Bhilai.png"
          width={70}
          alt="IIT-Bhilai-Logo"
          style={{ position: "relative" }}
        />
      </Col>
      <Col xs="auto"></Col>

      <Col xs="auto mx-3">
        <Button type="submit" className="logout">
          Logout
        </Button>
      </Col>
    </Navbar>
  );
}

export default CustomNavbar;
