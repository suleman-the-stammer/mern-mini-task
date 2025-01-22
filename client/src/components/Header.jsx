import "../components/header.css";

function Header() {
  return (
    <div className="headContainer">
      <div className="logo">
        <h2>Blogger</h2>
      </div>
      <div className="menu">
        <a href="" className="btn">
          {" "}
          Login
        </a>
        <a href="" className="btn">
          {" "}
          Register
        </a>
        <a href="" className="btn">
          {" "}
          Logout
        </a>
      </div>
    </div>
  );
}

export default Header;
