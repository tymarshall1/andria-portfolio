import instagram from "../../assets/instagram.svg";
import google from "../../assets/googlePlus.svg";
import linkedin from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-2 mt-auto bg-primary">
      <h2 className="text-xs font-extrabold text-white font-inter">
        Lets Connect
      </h2>
      <div className="flex gap-3">
        <Link to={"https://www.instagram.com/andriamooredesigner/"}>
          <img src={instagram} alt="to instagram profile" className="h-6" />
        </Link>
        <Link to={""}>
          <img src={google} alt="to google plus profile" className="h-6" />
        </Link>
        <Link to={"https://www.linkedin.com/in/andriamooredesigner/"}>
          <img src={linkedin} alt="to linkedin profile" className="h-6" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
