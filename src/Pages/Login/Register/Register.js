import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);
const navigate = useNavigate();

const toggleReg = () => {
  navigate('/login');
}

if(user){
  navigate('/');
}

//handle register
const handleRegister = event => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  createUserWithEmailAndPassword(email,password);
}
  return (
    <div className="register-form">
      <h2 className="text-center">Please Register</h2>
      <form onSubmit={handleRegister}>
            <input className="form-control my-2" type="text" name="name" id="" required placeholder="Your Name: "/>
            <input className="form-control my-2" type="email" name="email" id="" required placeholder="Email.."/>
            <input className="form-control my-2" type="password" name="password" id="" required placeholder="password.."/>
            <input className="btn btn-danger" type="submit" value="Register" />

      </form>
      <p className="text-center">Already have an account? <span onClick={toggleReg} className="text-danger">Login</span></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};
export default Register;
