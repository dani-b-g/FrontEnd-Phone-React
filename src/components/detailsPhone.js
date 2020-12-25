import React from "react";
import { useParams } from "react-router-dom";

// Bootstrap components
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

// CustomHooks
import { UseFetchPhones } from "../hooks/useFetchPhones";

// Customs Componenets
import Loader from "./loader";

function DetailsPhone() {
  const { id } = useParams();
  console.log(id);

  // NOTE: FALTA loading
  const { data: phone, loading } = UseFetchPhones(id);
  const { data } = phone;

  return (
    <>
      <Jumbotron bg="light" className="mb-0">
        <h1>Phone Details</h1>
      </Jumbotron>
      <Container className="mt-2 bg-light">
        {loading && <Loader />}

        <Row>
          <Col className="m-2">
            <Image
              className="tumb_detailed_img"
              src={`/assets/img/${data?.imageFileName}`}
              thumbnail
            />
          </Col>
          <Col className="text-center m-2">
            <Row>
              <Col>
                <h2 className="text-dark">{data?.name}</h2>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <h3>{data?.price.toFixed(2)} €</h3>
                <sub>
                  Price without VATs{" "}
                  {(data?.price - data?.price * 0.21).toFixed(2)} €
                </sub>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-left" md={{ span: 2, offset: 4 }}>
                <h5>Brand:</h5>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <h5>{data?.manufacturer}</h5>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-left" md={{ span: 2, offset: 4 }}>
                <h5>Color:</h5>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <h5>{data?.color}</h5>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-left" md={{ span: 2, offset: 4 }}>
                <h5>Screen:</h5>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <h5>{data?.screen}</h5>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-left" md={{ span: 2, offset: 4 }}>
                <h5>Processor:</h5>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
                <h5>{data?.processor}</h5>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-left" md={{ span: 2, offset: 4 }}>
                <h5>Ram:</h5>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <h5>{data?.ram} GB</h5>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="text-left" md={{ span: 2, offset: 4 }}>
                <h5>Description:</h5>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col className="text-left" md={{ offset: 4 }}>
                <p>{data?.description}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailsPhone;
