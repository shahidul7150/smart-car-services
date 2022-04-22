import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Checkout from '../Checkout/Checkout/Checkout';

const ServiceDetail = () => {

    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    const {serviceId}=useParams()
    return (
        <div>
            <h2>Welcome to detail {serviceId}</h2>
            {
                services.map(checkouts=> {
                    <Checkout key={checkouts._id} ></Checkout>
                })
            }
            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;