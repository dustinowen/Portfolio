import './header.css'
import { Link } from "react-router-dom";

export default function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (
      <header>
          <div className="nav-bar">
      <h1>Dustin Owen Thomson</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
              </nav>
              </div>
    </header>
  );
}
