import socialMediaIcons from "../assets/instagramIcon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto bg-secondary flex gap-4 justify-center p-2">
      <Link to={""}>
        <img src={socialMediaIcons} alt="to instagram profile" />
      </Link>
    </footer>
  );
}

export default Footer;
