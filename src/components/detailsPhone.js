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
          {/* DETAILS */}
          <Col>
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
            </Col>
            <Col>
              <dl className="row mt-1">
                <dt className="col-sm-5">Brand:</dt>
                <dd className="col-sm-3 font-weight-normal ">
                  {data?.manufacturer}
                </dd>
              </dl>
              <dl className="row mt-1">
                <dt className="col-sm-5">Color:</dt>
                <dd className="col-sm-3">{data?.color}</dd>
              </dl>
              <dl className="row mt-1">
                <dt className="col-sm-5">Screen:</dt>
                <dd className="col-sm-3">{data?.screen}</dd>
              </dl>
              <dl className="row mt-1">
                <dt className="col-sm-5">Processor:</dt>
                <dd className="col-sm-3">{data?.processor}</dd>
              </dl>
              <dl className="row mt-1">
                <dt className="col-sm-5">Ram:</dt>
                <dd className="col-sm-3">{data?.ram}</dd>
              </dl>
              <dl className="row mt-1">
                <dt className="col-sm-5">Description:</dt>
                <dd className="col-sm-3">{data?.description}</dd>
              </dl>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailsPhone;
