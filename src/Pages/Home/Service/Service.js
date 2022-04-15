import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="articles">
        <h2>{name} </h2>
        <p>Price: $ {price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary"
        >
          I need {name} service
        </button>
      </div>
    </div>
  );
};

export default Service;
