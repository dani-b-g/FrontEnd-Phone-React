import React from "react";

// CustomHooks
import { UseFetchPhones } from "../hooks/useFetchPhones";

// Bootstrap Components
import Jumbotron from "react-bootstrap/Jumbotron";

// Customs Compoenents
import PhoneItem from "./phoneItem";
import Loader from "./loader";

const PhoneGrid = () => {
  const { data, loading } = UseFetchPhones();

  return (
    <>
      <Jumbotron className="mb-0">
        <h1>Phone List</h1>
      </Jumbotron>
      <div className="container">
        {loading && <Loader />}

        <div className="grid-row">
          {data.map((data) => {
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
