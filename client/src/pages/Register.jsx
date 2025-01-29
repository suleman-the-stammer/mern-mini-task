/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    name: " ",
    email: " ",
    password: " ",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
       
        alert("User Created Successfully");
        // navigate("/login");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(inputs);
  };
  return (
    <div>
      <div className="faram">
        <form onSubmit={handleSubmit} className="Register-form" action="">
          <h3 className="block">Create Account</h3>
          <input
            className="fields "
            type="text"
            required
            value={inputs.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
            id=""
          />
          <input
            className="fields "
            type="text"
            required
            value={inputs.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            id=""
          />
          <input
            className="fields"
            type="password"
            required
            value={inputs.password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
            id=""
          />
          <input
            type="submit"
            className="Register-btn"
            onSubmit={handleSubmit}
            value="Register"
            name=""
            id=""
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
