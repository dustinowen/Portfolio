import "./footer.css";
import coder from "../assets/imgs/coder.png";
import github from "../assets/imgs/github.png";
import linked from "../assets/imgs/linked-in.png";
import email from "../assets/imgs/email.png";
import resume from "../assets/imgs/resume.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={coder} alt="coder" />
      Let's Connect!
      <div>
        <a href="https://github.com/dustinowen">
          <img src={github} alt="github" />
        </a>

        <a href="www.linkedin.com/in/dustinowenthomson">
          <img src={linked} alt="linked-in" />
        </a>

        <a href="mailto: stratus.banner05@icloud.com">
          <img src={email} alt="email" />
        </a>

        <a href="http://www.google.com">
          <img src={resume} alt="resume" />
        </a>
      </div>
    </div>
  );
}