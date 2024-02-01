import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Body() {
  const [showModal, setShowModal] = useState(false);

  const handleRaiseQuery = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Your existing content goes here */}

      {/* Raise Query Button */}
      <Button
        variant="warning"
        className="fixed-bottom fixed-right mb-3 mr-3"
        onClick={handleRaiseQuery}
      >
        Raise Query
      </Button>

      {/* Modal for Raise Query */}
      <Modal show={showModal} onHide={handleClose} className="modal-right">
        <Modal.Header closeButton>
          <Modal.Title>Raise Query</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your query form or content here */}
          {/* Example: <QueryForm /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Add any additional buttons for the modal footer */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Body;
