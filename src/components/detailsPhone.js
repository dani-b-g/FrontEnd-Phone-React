import React from "react";
import { useParams } from "react-router-dom";

// Bootstrap components
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// CustomHooks
import { UseFetchPhones } from "../hooks/useFetchPhones";

function DetailsPhone() {
  const { id } = useParams();
  console.log(id);

  const { data, loading } = UseFetchPhones(id);

  const phone = data[0];
  console.log("datos en details", phone);

  return (
    <>
      <Jumbotron className="mb-0">
        <h1>Phone Details</h1>
      </Jumbotron>
      <Container className="mt-5">
        <Row>
          <Col>IMAGEN</Col>
          <Col className="text-center">
            <Row>
              <Col>test1</Col>
            </Row>
            <Row>
              <Col>test2</Col>
              <Col>test3</Col>
            </Row>
            <Row>
              <Col>test2</Col>
              <Col>test3</Col>
            </Row>
            <Row>
              <Col>test2</Col>
              <Col>test3</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailsPhone;
