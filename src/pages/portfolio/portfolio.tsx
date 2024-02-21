import PictureButton from "../../components/pictureButton";
import keyStone from "./assets/keystone-logo.png";
import rachaelsBakery from "./assets/rachaels-bakery.png";
import rocknRolls from "./assets/rock'n-rolls.png";
import jrProm from "./assets/jr.prom.png";
import srProm from "./assets/sr.prom.png";
import lumsPond from "./assets/lums-pond.png";
import beach from "./assets/rehoboth-beach.png";
import photoManipulation from "./assets/photo-manipulation.png";
import bookCover from "./assets/book-covers.png";
import logo from "./assets/logos.png";
import socialMedia from "./assets/social-media.png";
import advertisements from "./assets/advertisements.png";

function Portfolio() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 bg-white justify-items-center md:grid-cols-3 lg:grid-cols-4">
      <PictureButton
        mobileImg={keyStone}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone project"}
        css={""}
        to={"/keystone-condominiums"}
      />
      <PictureButton
        mobileImg={rachaelsBakery}
        tabletImg={""}
        desktopImg={""}
        altText={"Rachaels bakery project"}
        css={""}
        to={"/rachaels-bakery"}
      />
      <PictureButton
        mobileImg={rocknRolls}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls project"}
        css={""}
        to={"/rock-n-rolls"}
      />
      <PictureButton
        mobileImg={jrProm}
        tabletImg={""}
        desktopImg={""}
        to={"/jr-prom"}
        altText={"Jr. prom photography"}
        css={""}
      />
      <PictureButton
        mobileImg={srProm}
        tabletImg={""}
        desktopImg={""}
        altText={"Sr. prom photography"}
        css={""}
        to={"/sr-prom"}
      />
      <PictureButton
        mobileImg={lumsPond}
        tabletImg={""}
        desktopImg={""}
        altText={"Lums Pond photography"}
        css={""}
        to={"/veterans-cemetery"}
      />
      <PictureButton
        mobileImg={beach}
        tabletImg={""}
        desktopImg={""}
        altText={"Beach photography"}
        css={""}
        to={"/rehobeth-beach"}
      />
      <PictureButton
        mobileImg={photoManipulation}
        tabletImg={""}
        desktopImg={""}
        altText={"Photo Manipulation"}
        css={""}
        to={"/photo-manipulation"}
      />
      <PictureButton
        mobileImg={bookCover}
        tabletImg={""}
        desktopImg={""}
        altText={"book cover from internship"}
        css={""}
        to={"/book-covers"}
      />
      <PictureButton
        mobileImg={logo}
        tabletImg={""}
        desktopImg={""}
        altText={"logos from internship"}
        css={""}
        to={"/logo-designs"}
      />
      <PictureButton
        mobileImg={socialMedia}
        tabletImg={""}
        desktopImg={""}
        altText={"social media from internship"}
        css={""}
        to={"/social-media-advertisements"}
      />
      <PictureButton
        mobileImg={advertisements}
        tabletImg={""}
        desktopImg={""}
        altText={"advertisements from internship"}
        css={""}
        to={"/advertisements"}
      />
    </div>
  );
}

export default Portfolio;
