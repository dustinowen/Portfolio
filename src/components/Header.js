import Typed from 'react-typed'
import "./header.css";

export default function Header(props) {

  return (
    <header>
      <div className="wrapper">
          <h1>Hello, my name is Dustin —<br/>
          <Typed
            strings={[
              "I am a JavaScript programmer...",
              "I am an Express.js novice...",
              "I am a student of React...",
              "I am a Full-Stack Developer!",
        ]}
        typeSpeed={75}
        backSpeed={50}
        backDelay={100}
          />
        </h1>
      </div>
    </header>
  );
}