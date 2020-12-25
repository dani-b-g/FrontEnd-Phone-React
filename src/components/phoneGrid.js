import React from "react";

// CustomHooks
import { UseFetchPhones } from "../hooks/useFetchPhones";

// Bootstrap Components
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

// Customs Compoenents
import PhoneItem from "./phoneItem";
import Loader from "./loader";

const PhoneGrid = () => {
  const { data, loading } = UseFetchPhones();

  return (
    <>
      <Jumbotron className="mb-0">
        <h1>Phone List</h1>
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
        {loading && <Loader />}

        <div className="grid-row">
          {data.map((data) => {
            console.log(data);
            return (
              <div key={data._id} className="animate__animated animate__fadeIn">
                <PhoneItem key={data._id} phone={data}></PhoneItem>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhoneGrid;
