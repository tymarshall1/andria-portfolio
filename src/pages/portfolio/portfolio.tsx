import Picture from "../../components/picture";
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
    <div className="bg-primary">
      <section className="p-4 mb-4">
        <h1 className="mb-4 text-4xl font-normal text-center text-tertiaryTwo font-alexBrush">
          Branding Projects
        </h1>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <Picture
            mobileImg={keyStone}
            tabletImg={""}
            desktopImg={""}
            altText={"keystone project"}
            css={""}
          />
          <Picture
            mobileImg={rachaelsBakery}
            tabletImg={""}
            desktopImg={""}
            altText={"Rachaels bakery project"}
            css={""}
          />
          <Picture
            mobileImg={rocknRolls}
            tabletImg={""}
            desktopImg={""}
            altText={"rock n rolls project"}
            css={""}
          />
        </div>
      </section>

      <section className="p-4 mb-4">
        <h1 className="mb-4 text-4xl font-normal text-center text-tertiaryTwo font-alexBrush">
          Photography Projects
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-4 justify-items-center">
          <Picture
            mobileImg={jrProm}
            tabletImg={""}
            desktopImg={""}
            altText={"Jr. prom photography"}
            css={""}
          />
          <Picture
            mobileImg={srProm}
            tabletImg={""}
            desktopImg={""}
            altText={"Sr. prom photography"}
            css={""}
          />
          <Picture
            mobileImg={lumsPond}
            tabletImg={""}
            desktopImg={""}
            altText={"Lums Pond photography"}
            css={""}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 px-16 justify-items-center">
          <Picture
            mobileImg={beach}
            tabletImg={""}
            desktopImg={""}
            altText={"Beach photography"}
            css={""}
          />
          <Picture
            mobileImg={photoManipulation}
            tabletImg={""}
            desktopImg={""}
            altText={"Photo Manipulation"}
            css={""}
          />
        </div>
      </section>
      <section className="p-4 mb-4">
        <h1 className="mb-4 text-4xl font-normal text-center text-tertiaryTwo font-alexBrush ">
          Bestlogic Internship
        </h1>
        <div className="grid grid-cols-2 gap-4 px-16 justify-items-center">
          <Picture
            mobileImg={bookCover}
            tabletImg={""}
            desktopImg={""}
            altText={"book cover from internship"}
            css={""}
          />
          <Picture
            mobileImg={logo}
            tabletImg={""}
            desktopImg={""}
            altText={"logos from internship"}
            css={""}
          />
          <Picture
            mobileImg={socialMedia}
            tabletImg={""}
            desktopImg={""}
            altText={"social media from internship"}
            css={""}
          />
          <Picture
            mobileImg={advertisements}
            tabletImg={""}
            desktopImg={""}
            altText={"advertisements from internship"}
            css={""}
          />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
