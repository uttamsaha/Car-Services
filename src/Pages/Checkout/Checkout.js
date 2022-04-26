import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../Hooks/useServiceDetail";

const Checkout = () => {
  const {serviceId} = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div>
      <h2>Please Checkout</h2>
    </div>
  );
};
export default Checkout;
