import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

import pictureOneMobile from "./assets/pic-1--mobile.png";
import pictureTwoMobile from "./assets/pic-2-mobile.png";
import pictureThreeMobile from "./assets/pic-3-mobile.png";
import pictureFourMobile from "./assets/pic-4-mobile.png";
import pictureFiveMobile from "./assets/pic-5-mobile.png";
import pictureSixMobile from "./assets/pic-6-mobile.png";

// import pictureOneTablet from "./assets/Picture 1 web.png";
// import pictureTwoTablet from "./assets/pic-2-web.png";
// import pictureThreeTablet from "./assets/pic-3-web.png";
// import pictureFourTablet from "./assets/pic-4-web.png";
// import pictureFiveTablet from "./assets/pic-5-web.png";
// import pictureSixTablet from "./assets/pic-6-web.png";

function JrProm() {
  return (
    <BaseProjectPage
      title={"Jr. Prom"}
      description={
        "I had the chance to capture some of the most elegant pictures for these beauties junior prom. " +
        "We decided to go with the brick stone background to compliment all of their outfits. " +
        "Below are the results from this magical day."
      }
    >
      <Picture
        mobileImg={pictureOneMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture one"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={pictureTwoMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture two"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={pictureThreeMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture three"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={pictureFourMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture four"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={pictureFiveMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture five"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={pictureSixMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture six"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default JrProm;
