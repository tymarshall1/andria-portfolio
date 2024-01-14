import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import howToBuildBrand from "./assets/how-to-build-a-brand-identity.png";
import jobsForYou from "./assets/jobs-just-for-you.png";
import joinUs from "./assets/join-us.png";
import merch from "./assets/merch.png";
import motivationalQuote from "./assets/motivational-quote.png";
import weAreHiringOne from "./assets/we-are-hiring.png";
import weAreHiringTwo from "./assets/we-are-hiring-2.png";

function Advertisements() {
  return (
    <BaseProjectPage
      title={"Advertisements"}
      description={
        "During my internship with Bestlogic Staffing I was tasked with designing " +
        "advertisements for digital and print use for the staffing company. " +
        "I had the creative freedom to design whatever I pleased so, after looking " +
        "into the company and at past posts I decided to create posts for jobs they were " +
        "hiring for, motivational quotes, and ads that could be placed on a billboard."
      }
    >
      <Picture
        mobileImg={joinUs}
        tabletImg={""}
        desktopImg={""}
        altText={"join us ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={weAreHiringTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"we are hiring ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={weAreHiringOne}
        tabletImg={""}
        desktopImg={""}
        altText={"we are hiring ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={motivationalQuote}
        tabletImg={""}
        desktopImg={""}
        altText={"motivational Quote"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={jobsForYou}
        tabletImg={""}
        desktopImg={""}
        altText={"jobs just for you ad"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={merch}
        tabletImg={""}
        desktopImg={""}
        altText={"hat with logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={howToBuildBrand}
        tabletImg={""}
        desktopImg={""}
        altText={"how to build a brand identity"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default Advertisements;
