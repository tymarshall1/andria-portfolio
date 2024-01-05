import { Link } from "react-router-dom";
import navhomebtn from "../assets/navhomebtn.svg";
import hamburger from "../assets/hamburger.svg";
function Navbar() {
  return (
    <nav className="bg-secondary flex gap-8 mb-auto justify-between p-2">
      <Link to={"/"}>
        <img src={navhomebtn} alt="home button" />
      </Link>
      <img src={hamburger} alt="navigation menu" />
    </nav>
  );
}

export default Navbar;
