import React from "react";
import PropTypes from "prop-types";

// Bootstrap components
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const phoneItem = ({ phone }) => {
  // Image import
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="imgCard"
        src={`/assets/img/${phone.imageFileName}`}
      />
      <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Card.Text>{phone.description}</Card.Text>
        <Row className="p-2">
          <Button variant="primary">Details</Button>
          <Col className="offset-5">
            <span className=" text-center align-middle ">{`${phone.price} €`}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

phoneItem.propTypes = {};

export default phoneItem;
