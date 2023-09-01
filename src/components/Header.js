import Typed from 'react-typed'
import "./header.css";
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
      <div className="wrapper">
          <h1>Hello, my name is Dustin —
          <Typed
            strings={[
              "I am a JavaScript progr",
              "I am an Express.js novi",
              "I am a growing React devel",
              "I am a Full-Stack Developer!",
        ]}
        typeSpeed={75}
        backSpeed={50}
        backDelay={200}
      /></h1>
      </div>
    </header>
  );
}
