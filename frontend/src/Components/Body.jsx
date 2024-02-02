import React, { useState } from "react";
import Search from "./Search";
import Cards from "../Components/Card"; // Import the Cards component
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../App";

function Body() {
  const { IsUserLoggedIn, setIsUserLoggedIn } = useContext(AdminContext);
  const navigate = useNavigate();

  // Function to receive student data from the Search component

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "30px auto", // This will center horizontally
        width: "50%",
      }}
    >
      {/* Your existing content goes here */}

      {/* Search component with a callback to handle student data */}
      <Search IsUserLoggedIn={IsUserLoggedIn} />
      {/* Display student details if available */}
    </div>
  );
}

export default Body;
