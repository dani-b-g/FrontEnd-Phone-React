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
import PhoneItem from "./phoneItem";

const phoneGrid = () => {
  const { data, loading } = UseFetchPhones();

  return (
    <>
      <Jumbotron className="mb-0">
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
      <div className="container">
        <div className="grid-row">
          {data.map((data) => {
            console.log(data);
            return <PhoneItem key={data.id} phone={data}></PhoneItem>;
          })}
        </div>
      </div>
    </>
  );
};

export default phoneGrid;
