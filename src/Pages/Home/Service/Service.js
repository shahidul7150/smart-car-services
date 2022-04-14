import React from 'react';
import './Service.css'


const Service = ({ service }) => {
    const {name,price,description,img } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='articles'>
            <h2>{name} </h2>
            <p>Price:  $ {price}</p>
            <p><small>{description}</small></p>
            <button>I need {name} service</button>
            </div>
        </div>
    );
};

export default Service;