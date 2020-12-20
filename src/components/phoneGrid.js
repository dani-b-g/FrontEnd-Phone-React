import React from "react";

// CustomHooks
import { UseFetchPhones } from "../hooks/useFetchPhones";

// Bootstrap Components
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const phoneGrid = () => {
  const { data, loading } = UseFetchPhones();

  return (
    <>
      <Jumbotron>
        <h1>PhoneList</h1>
        <p></p>
        <p>
          <Button variant="primary">
            <span>
              Add phone <FontAwesomeIcon className="ml-2" icon={faMobileAlt} />
            </span>
          </Button>
        </p>
      </Jumbotron>
      <div>
        {data.map((data) => {
          console.log(data);
          return (
            <div>
              <pre key={data.id}>{JSON.stringify(data)}</pre>
            </div>
          );
        })}
        <Col></Col>
      </div>
    </>
  );
};

export default phoneGrid;
