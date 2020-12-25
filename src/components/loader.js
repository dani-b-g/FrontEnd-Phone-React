import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="spinner-grow"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
