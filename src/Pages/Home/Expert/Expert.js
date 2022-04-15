import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div  className="g-4 col-sm-12 col-md-6 col-lg-4 ">
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link className="btn btn-primary" to="#">
              See about me{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
