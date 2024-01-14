import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import staffingOne from "./assets/best-logic-staffing-1.png";
import staffingTwo from "./assets/bestlogic-staffing-2.png";
import jobsForYouOne from "./assets/jobs-just-for-you-1.png";
import jobsForYouTwo from "./assets/jobs-just-for-you-2.png";
import nursingJourneyOne from "./assets/nursing-journey-1.png";
import nursingJourneyTwo from "./assets/nursing-journey-2.png";
import passionateSoccerOne from "./assets/passionate-soccer-coach-1.png";
import passionateSoccerTwo from "./assets/passionate-soccer-coach-2.png";
import resumax from "./assets/resumax.png";
import rnnation from "./assets/rnnation.png";

function LogoDesigns() {
  return (
    <BaseProjectPage
      title={"Logo Design’s"}
      description={
        "Throughout my internship with Bestlogic Staffing, I designed logos and apparel for the company. " +
        "Also, I designed logos for business the company worked with that were up and coming. " +
        "I worked with a range of clients including a staffing agency, online nursing site, job searching site, " +
        "and a soccer coaching blog. Below are my a few of my favorite designs."
      }
    >
      <Picture
        mobileImg={staffingOne}
        tabletImg={""}
        desktopImg={""}
        altText={"bestlogic logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={staffingTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"bestlogic logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={jobsForYouOne}
        tabletImg={""}
        desktopImg={""}
        altText={"jobs for you logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={jobsForYouTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"jobs for you logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={nursingJourneyOne}
        tabletImg={""}
        desktopImg={""}
        altText={"nursing journey logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={nursingJourneyTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"nursing journey logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={passionateSoccerOne}
        tabletImg={""}
        desktopImg={""}
        altText={"passionate soccer logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={passionateSoccerTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"passionate soccer logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={resumax}
        tabletImg={""}
        desktopImg={""}
        altText={"resumax logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={rnnation}
        tabletImg={""}
        desktopImg={""}
        altText={"rn nation logo"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default LogoDesigns;
