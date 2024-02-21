import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
import { useEffect, useState } from "react";
import closeBtn from "../assets/closeBtn.svg";
import navHomeBtn from "../assets/logo 2.svg";
import sidebarBG from "../assets/sidebarBg.png";

function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="">
      <img
        src={hamburger}
        alt="dropdown menu"
        onClick={() => setIsOpen(true)}
        className="h-5 mt-3 md:h-auto md:mt-5"
      />
      <nav
        id="hamburgerNav"
        className={`fixed top-0 right-0  w-3/4 sm:w-1/2  h-full z-40 ease-in-out duration-300 overflow-scroll bg-cover  ${
          isOpen ? " translate-x-0 transition" : " translate-x-full transition"
        }`}
        style={{ backgroundImage: `url(${sidebarBG})` }}
      >
        <img
          src={closeBtn}
          onClick={() => setIsOpen(false)}
          alt="close nav button"
          className="self-start w-10 h-10 mb-4 cursor-pointer"
        />
        <div
          className="flex flex-col items-center h-full gap-8 text-center"
          onClick={() => setIsOpen(false)}
        >
          {/*Home Link*/}
          <div className="">
            <Link
              to={"/"}
              className="text-3xl font-extrabold text-center font-inter text-tertiaryOne"
            >
              Home
            </Link>
          </div>

          {/*Portfolio pages*/}
          <div>
            <Link
              to={"/portfolio"}
              className="text-3xl font-extrabold text-center font-inter text-tertiaryOne"
            >
              Portfolio
            </Link>
            <Link
              to={"/keystone-condominiums"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block mt-4"
            >
              Keystone Condominiums
            </Link>
            <Link
              to={"/rachaels-bakery"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Rachael’s Bakery
            </Link>
            <Link
              to={"/rock-n-rolls"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Rock’n Rolls Bakery
            </Link>
            <Link
              to={"/jr-prom"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Junior Prom
            </Link>
            <Link
              to={"/sr-prom"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Senior Prom
            </Link>
            <Link
              to={"/veterans-cemetery"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Veteran Cemetery
            </Link>
            <Link
              to={"/rehobeth-beach"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Rehoboth Beach
            </Link>
            <Link
              to={"/photo-manipulation"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Photo Manipulation
            </Link>
          </div>

          {/*Internship pages*/}
          <div>
            <Link
              className="text-3xl font-extrabold text-center font-inter text-tertiaryOne"
              to={"/portfolio"}
            >
              Internship
            </Link>
            <Link
              to={"/book-covers"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block mt-4"
            >
              Book Covers
            </Link>
            <Link
              to={"/logo-designs"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Logo Designs
            </Link>
            <Link
              to={"/social-media-advertisements"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Social Media Ads
            </Link>
            <Link
              to={"/advertisements"}
              className="text-center font-inter text-xl font-normal text-[#F4E2FC] block"
            >
              Advertisements
            </Link>
          </div>

          {/*Contact Page*/}
          <div>
            <Link
              to={"/contact"}
              className="text-3xl font-extrabold text-center font-inter text-tertiaryOne"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
}

function DesktopBar() {
  return (
    <div className="flex gap-8 p-6">
      <Link
        className="text-2xl font-extrabold font-inter text-tertiaryOne"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="text-2xl font-extrabold font-inter text-tertiaryOne "
        to={"/portfolio"}
      >
        Portfolio
      </Link>
      <Link
        className="text-2xl font-extrabold font-inter text-tertiaryOne "
        to={""}
      >
        About Me
      </Link>
      <Link
        className="text-2xl font-extrabold font-inter text-[#6437A0] bg-tertiaryOne rounded px-2"
        to={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
}

function Navbar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between gap-8 px-4 py-2 mb-auto bg-primary max-h-28">
      <Link to={"/"}>
        <img src={navHomeBtn} alt="home button" className="h-10 md:h-auto" />
      </Link>
      {screenSize > 1024 ? <DesktopBar /> : <HamburgerNav />}
    </nav>
  );
}

export default Navbar;
