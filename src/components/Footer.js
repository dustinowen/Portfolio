import "./footer.css";
import coder from "../assets/imgs/coder.png";
import github from "../assets/imgs/github.png";
import linked from "../assets/imgs/linked-in.png";
import email from "../assets/imgs/email.png";
import resume from "../assets/imgs/resume.png";

export default function Footer() {
  return (
    <div className="footer">
      <img className="coder" src={coder} alt="coder" width="50px" />
      <h3> Let's Connect!</h3>
      <p />
      <a href="https://github.com/dustinowen">
        <img src={github} alt="github" width="50px" />
      </a>
      <a href="www.linkedin.com/in/dustinowenthomson">
        <img className="margin" src={linked} alt="linked-in" width="48px" />
      </a>
      <a href="mailto: stratus.banner05@icloud.com">
        <img className="spacer" src={email} alt="email" width="42px" />
      </a>
      <a href="http://www.google.com">
        <img className="spacer" src={resume} alt="resume" width="42px" />
      </a>
    </div>
  );
}