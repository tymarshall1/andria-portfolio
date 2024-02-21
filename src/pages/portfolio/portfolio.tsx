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

import keyStoneTablet from "./assets/keystone-web.png";
import rachaelsBakeryTablet from "./assets/rachaels-bakery-web.png";
import rocknRollsTablet from "./assets/rock'n-rolls-web.png";
import jrPromTablet from "./assets/Nilsa-Jr.-Pic-web.png";
import srPromTablet from "./assets/Nilsa-Sr.-Pic-web.png";
import lumsPondTablet from "./assets/lums-web.png";
import beachTablet from "./assets/cape-web.png";
import photoManipulationTablet from "./assets/photo-man-web.png";
import bookCoverTablet from "./assets/book-covers-web.png";
import logoTablet from "./assets/resumax-web.png";
import socialMediaTablet from "./assets/social-media-ads-web.png";
import advertisementsTablet from "./assets/advertisments-1-web.png";

function Portfolio() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 mx-auto bg-white justify-items-center md:grid-cols-3 lg:grid-cols-4 max-w-fit">
      <PictureButton
        mobileImg={keyStone}
        tabletImg={keyStoneTablet}
        desktopImg={""}
        altText={"keystone project"}
        css={""}
        to={"/keystone-condominiums"}
      />
      <PictureButton
        mobileImg={rachaelsBakery}
        tabletImg={rachaelsBakeryTablet}
        desktopImg={""}
        altText={"Rachaels bakery project"}
        css={""}
        to={"/rachaels-bakery"}
      />
      <PictureButton
        mobileImg={rocknRolls}
        tabletImg={rocknRollsTablet}
        desktopImg={""}
        altText={"rock n rolls project"}
        css={""}
        to={"/rock-n-rolls"}
      />
      <PictureButton
        mobileImg={jrProm}
        tabletImg={jrPromTablet}
        desktopImg={""}
        to={"/jr-prom"}
        altText={"Jr. prom photography"}
        css={""}
      />
      <PictureButton
        mobileImg={srProm}
        tabletImg={srPromTablet}
        desktopImg={""}
        altText={"Sr. prom photography"}
        css={""}
        to={"/sr-prom"}
      />
      <PictureButton
        mobileImg={lumsPond}
        tabletImg={lumsPondTablet}
        desktopImg={""}
        altText={"Lums Pond photography"}
        css={""}
        to={"/veterans-cemetery"}
      />
      <PictureButton
        mobileImg={beach}
        tabletImg={beachTablet}
        desktopImg={""}
        altText={"Beach photography"}
        css={""}
        to={"/rehobeth-beach"}
      />
      <PictureButton
        mobileImg={photoManipulation}
        tabletImg={photoManipulationTablet}
        desktopImg={""}
        altText={"Photo Manipulation"}
        css={""}
        to={"/photo-manipulation"}
      />
      <PictureButton
        mobileImg={bookCover}
        tabletImg={bookCoverTablet}
        desktopImg={""}
        altText={"book cover from internship"}
        css={""}
        to={"/book-covers"}
      />
      <PictureButton
        mobileImg={logo}
        tabletImg={logoTablet}
        desktopImg={""}
        altText={"logos from internship"}
        css={""}
        to={"/logo-designs"}
      />
      <PictureButton
        mobileImg={socialMedia}
        tabletImg={socialMediaTablet}
        desktopImg={""}
        altText={"social media from internship"}
        css={""}
        to={"/social-media-advertisements"}
      />
      <PictureButton
        mobileImg={advertisements}
        tabletImg={advertisementsTablet}
        desktopImg={""}
        altText={"advertisements from internship"}
        css={""}
        to={"/advertisements"}
      />
    </div>
  );
}

export default Portfolio;
