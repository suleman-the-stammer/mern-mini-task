import "../components/header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector , useDispatch  } from "react-redux";
import {authActions} from '../redux/store.js'
// import { useState } from "react";

function Header() {
  const isLogin = useSelector((state) => state.isLogin);

  // const [value, setValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    try {
      dispatch(authActions.logout());
      alert("You are Logout ");
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="headContainer">
      <div>
        <Link to="/">
          <h2 className="logo">Blogger</h2>{" "}
        </Link>
      </div>
      {isLogin && (
        <div className="center">
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              // background: isActive ? "rgba(255, 255, 255, 0.1)" : "darkcyan",
              opacity: isActive ? 2 : 0.5,
            })}
            className="btn  "
          >
            Blogs
          </NavLink>
          <NavLink
            to="/myBlog"
            style={({ isActive }) => ({
              opacity: isActive ? 2 : 0.5,
            })}
            className="btn"
          >
            My Blogs
          </NavLink>
        </div>
      )}
      <div className="menu">
        {!isLogin && (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
        {isLogin && (
          <>
            <Link onClick={handleLogout} to="/logout" className="btn">
              Logout{" "}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
/* {(e)=>{return e.isActive? "bg-red-500": "btn"} } */

export default Header;
