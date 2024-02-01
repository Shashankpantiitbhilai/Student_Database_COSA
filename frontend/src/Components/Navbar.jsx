import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { logoutUser } from "../services/auth";

function FormExample() {
  const handleLogout = async (event) => {
    try {
      // Call the logoutUser function
      await logoutUser();

      // Handle any additional logic after logout if needed
    } catch (error) {
      // Handle logout error
      console.error("Logout error:", error);
    }
  };

  return (
    <Navbar className="justify-content-between nav text-dark">
      <img
        src="/Logo_of_IIT_Bhilai.png"
        width={70}
        alt="IIT-Bhilai-Logo"
        style={{ position: "relative" }}
      />
      <Form className="mx-auto">
        <Row className="flex-grow-1">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search student by their ID"
              className="mr-sm-2"
              style={{ width: "300px", height: "40px" }}
            />
          </Col>
        </Row>
      </Form>
      <Form onSubmit={handleLogout}>
        <Col xs="auto mx-3">
          <Button type="submit" variant="light">
            Logout
          </Button>
        </Col>
      </Form>
    </Navbar>
  );
}

export default FormExample;
