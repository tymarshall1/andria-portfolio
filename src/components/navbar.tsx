import { Link } from "react-router-dom";
import navhomebtn from "../assets/navhomebtn.svg";
import hamburger from "../assets/hamburger.svg";
function Navbar() {
  return (
    <nav className="flex justify-between gap-8 px-4 py-2 mb-auto bg-secondary">
      <Link to={"/"}>
        <img src={navhomebtn} alt="home button" />
      </Link>
      <img src={hamburger} alt="navigation menu" />
    </nav>
  );
}

export default Navbar;
