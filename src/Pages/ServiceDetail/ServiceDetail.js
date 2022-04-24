import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(()=>{
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[])
  return (
    <div>
      <h2>You are about to book: {service.name}</h2>
      <Link to="/checkout">
        <button className="btn btn-danger">Proceed Checkout</button>
      </Link>
    </div>
  );
};
export default ServiceDetail;
