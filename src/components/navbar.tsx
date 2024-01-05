import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-blue-200 flex gap-8 mb-auto">
      <Link to={"/"}>Home</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
    </nav>
  );
}

export default Navbar;
