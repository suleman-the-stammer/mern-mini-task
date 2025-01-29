import "../pages/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {authActions} from '../redux/store.js'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
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
      const { data } = await axios.post("/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        dispatch(authActions.login());
        {
          alert("Successfully Login");
        }
        navigate("/");
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
          <h3 className="block">Login</h3>
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
            value="Login"
            name=""
            id=""
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
