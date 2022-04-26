import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    //fetch load data using async await //implement this using normal fetch
    const getOrders = async() => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`; //search query email diye nijer odres kuje pabe..
      const {data} = await axios.get(url,{
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setOrders(data);
    }
    getOrders();
  },[])
  return (
    <div>
        <h2>Your Orders: {orders.length}</h2>
    </div>
  )
}

export default Order;