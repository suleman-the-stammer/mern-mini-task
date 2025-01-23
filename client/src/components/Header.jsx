import "../components/header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headContainer">
      <div>
        <Link to="/">
          <h2 className="logo">Blogger</h2>{" "}
        </Link>
      </div>
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
      <div className="menu">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
        <Link to="/logout" className="btn">
          Logout{" "}
        </Link>
      </div>
    </div>
  );
}
/* {(e)=>{return e.isActive? "bg-red-500": "btn"} } */

export default Header;
