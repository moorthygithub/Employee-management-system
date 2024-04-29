import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Header(props) {
  const isLoggedIn = props.name;
  // console.log("isloggedin in Header.js:", isLoggedIn);

  return (
    <div className="header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="header-image"
        viewBox="0 0 384 512"
      >
        <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
      </svg>
      <h1 className="header-class">Webiste</h1>
      <ul>
        <li>
          <Link to="form">Main Page</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
      {isLoggedIn ? (
        <button className="header-button">
          <a href="/">LOGOUT</a>
        </button>
      ) : (
        <button className="header-button">
          <a href="http://localhost:3000/login">LOGIN</a>
        </button>
      )}
    </div>
  );
}
export default Header;
