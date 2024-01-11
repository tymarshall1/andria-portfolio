import { Link } from "react-router-dom";
import navhomebtn from "../assets/navhomebtn.svg";
import hamburger from "../assets/hamburger.svg";
import { useState } from "react";
import closeBtn from "../assets/closeBtn.svg";
function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="">
      <img
        src={hamburger}
        alt="dropdown menu"
        onClick={() => setIsOpen(true)}
      />
      <nav
        id="hamburgerNav"
        className={`fixed top-0 right-0  w-3/4 bg-white h-full z-40 ease-in-out duration-300 overflow-scroll ${
          isOpen ? " translate-x-0 transition" : " translate-x-full transition"
        }`}
      >
        <img
          src={closeBtn}
          onClick={() => setIsOpen(false)}
          alt="close nav button"
          className="self-start w-10 h-10 mb-4"
        />
        <div
          className="flex flex-col items-center h-full gap-4 text-center"
          onClick={() => setIsOpen(false)}
        >
          {/*Home Link*/}
          <div className="">
            <Link
              to={"/"}
              className="text-5xl font-normal text-center font-alexBrush text-tertiaryTwo"
            >
              Home
            </Link>
          </div>

          {/*Portfolio pages*/}
          <div>
            <Link
              to={"/portfolio"}
              className="text-5xl font-normal text-center font-alexBrush text-tertiaryTwo"
            >
              Portfolio
            </Link>
            <Link
              to={"/keystone-condominiums"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Keystone Condominiums
            </Link>
            <Link
              to={"/rachaels-bakery"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Rachael’s Bakery
            </Link>
            <Link
              to={"/rock-n-rolls"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Rock’n Rolls Bakery
            </Link>
            <Link
              to={"/jr-prom"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Junior Prom
            </Link>
            <Link
              to={"/sr-prom"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Senior Prom
            </Link>
            <Link
              to={"/lums-pond"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Lums Pond
            </Link>
            <Link
              to={"/rehobeth-beach"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Rehoboth Beach
            </Link>
            <Link
              to={"/photo-manipulation"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Photo Manipulation
            </Link>
          </div>

          {/*Internship Pages*/}
          <div>
            <Link
              to={""}
              className="text-5xl font-normal text-center font-alexBrush text-tertiaryTwo"
            >
              Internship
            </Link>
            <Link
              to={"/book-covers"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Book Covers
            </Link>
            <Link
              to={"/logo-designs"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Logo Designs
            </Link>
            <Link
              to={"/social-media-advertisements"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Social Media Ads
            </Link>
            <Link
              to={"/advertisements"}
              className="text-center font-manjari text-xl font-normal text-[#797A6B] block"
            >
              Advertisements
            </Link>
          </div>

          {/*Contact Page*/}
          <div>
            <Link
              to={"/contact"}
              className="text-5xl font-normal text-center font-alexBrush text-tertiaryTwo"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-8 px-4 py-2 mb-auto bg-secondary">
      <Link to={"/"}>
        <img src={navhomebtn} alt="home button" />
      </Link>
      <HamburgerNav />
    </nav>
  );
}

export default Navbar;
