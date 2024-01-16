import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import groupMobileOne from "./assets/group-picture-mobile.png";
import groupMobileTwo from "./assets/group-picture mobile 2.png";
import friendsOneMobile from "./assets/picture-1-with-friend mobile.png";
import friendsTwoMobile from "./assets/pic-with-friend-2 mobile.png";
import friendsThreeMobile from "./assets/picture-with-friend-3 mobile.png";
import friendsFourMobile from "./assets/nilsa-senior-prom-mobile-1.png";
import siblingsMobile from "./assets/pictures-with-siblings mobile.png";
import uncleMobile from "./assets/picture-with-uncle mobile.png";
import dateOneMobile from "./assets/picture-with-date mobile.png";
import dateTwoMobile from "./assets/nilsa-senior-prom-pictures-date-mobile.png";

function SrProm() {
  return (
    <BaseProjectPage
      title={"Sr. Prom"}
      description={
        "These pictures are of my sisters senior prom with her and her friends. " +
        "I wanted to show the progression from junior to senior year. " +
        "These photographs were taken at the Jasper Crane Rose Garden in Wilmington, De. " +
        "After taking the photos I touched them up using Adobe Lightroom."
      }
    >
      <Picture
        mobileImg={friendsOneMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"two friends prom picture"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={friendsTwoMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"two friends prom picture"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={uncleMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture with uncle"}
        css={""}
        imgCss="h-full w-full object-cover"
      ></Picture>

      <Picture
        mobileImg={friendsFourMobile}
        tabletImg={""}
        desktopImg={""}
        altText={""}
        css={"row-span-2"}
      ></Picture>

      <Picture
        mobileImg={dateOneMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"picture with date"}
        css={""}
        imgCss="h-full w-full object-cover"
      ></Picture>

      <Picture
        mobileImg={siblingsMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture with siblings"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={friendsThreeMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture with friend"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={dateTwoMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"prom picture with date"}
        css={"row-span-2"}
      ></Picture>

      <Picture
        mobileImg={groupMobileOne}
        tabletImg={""}
        desktopImg={""}
        altText={"group photo with friends"}
        css={""}
        imgCss="h-full w-full object-cover"
      ></Picture>

      <Picture
        mobileImg={groupMobileTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"group photo with friends"}
        css={""}
        imgCss="h-full w-full object-cover"
      ></Picture>
    </BaseProjectPage>
  );
}

export default SrProm;
