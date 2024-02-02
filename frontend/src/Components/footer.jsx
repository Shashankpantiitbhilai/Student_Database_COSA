import React from "react";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <footer className="fixed-bottom bg-dark text-light p-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <span>&copy; OpenLake 2024</span>
          <Button variant="warning" className="ml-auto">
            Raise Query
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
