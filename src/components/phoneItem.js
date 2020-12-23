import React from "react";
import PropTypes from "prop-types";

// Bootstrap components
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Routes

const phoneItem = ({ phone }) => {
  // Image import
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="imgCard"
        src={`./assets/img/${phone.imageFileName}`}
      />
      <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Card.Text>{phone.description}</Card.Text>
        <Row className="p-2">
          {/* /details/:id */}
          <a href={`/details/${phone.id}`} className="btn btn-primary">
            Details
          </a>
          <Col className="offset-4">
            <span className=" text-center align-middle h4">{`${phone.price} €`}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

phoneItem.propTypes = {};

export default phoneItem;
