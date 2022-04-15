import React from "react";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

const toggleReg = () => {
  navigate('/login');

}

//handle register
const handleRegister = event => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
}
  return (
    <div className="register-form">
      <h2 className="text-center">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" required placeholder="Your Name: "/>
        <input type="email" name="email" id="" required placeholder="Email.."/>
        <input type="password" name="password" id="" required placeholder="password.."/>
        <input type="submit" value="Register" />

      </form>
      <p className="text-center">Already have an account? <span onClick={toggleReg} className="text-danger">Login</span></p>
    </div>
  );
};
export default Register;
