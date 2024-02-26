import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import didYouKnowOne from "./assets/did-you-know-1.png";
import didYouKnowTwo from "./assets/did-you-know-2.png";
import funnyPostOne from "./assets/funny-post-2.png";
import funnyPostTwo from "./assets/funny-post.png";
import inNeedOfJob from "./assets/in-need-of-a-job.png";
import motivationalQuoteOne from "./assets/motivational-quote.png";
import motivationalQuoteTwo from "./assets/motivational-quote-2.png";
import motivationalQuoteThree from "./assets/motivational-quote-3.png";
import weAreHiring from "./assets/we-are-hiring.png";

function SocialMediaAdvertisements() {
  return (
    <BaseProjectPage
      title={"Social Media Advertisements"}
      description={
        "During my internship with Bestlogic Staffing I was tasked with designing social media " +
        "advertisements for the staffing company. I had the creative freedom to design whatever I pleased so, " +
        "after looking into the company and at past posts I decided to create motivational quotes, " +
        "interesting facts, and fun pictures that the company could post that is relatable to them and their clients."
      }
      optionalGridCustom="lg:grid-cols-4 lg:items-center lg:justify-items-center"
    >
      <Picture
        mobileImg={motivationalQuoteOne}
        tabletImg={""}
        desktopImg={""}
        altText={"motivational quote one"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={weAreHiring}
        tabletImg={""}
        desktopImg={""}
        altText={"we are hiring"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={motivationalQuoteTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"motivational quote two"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={funnyPostTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"funny job recruiting post"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={didYouKnowTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"did you know ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={didYouKnowOne}
        tabletImg={""}
        desktopImg={""}
        altText={"did you know ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={inNeedOfJob}
        tabletImg={""}
        desktopImg={""}
        altText={"in need of a job ad"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={funnyPostOne}
        tabletImg={""}
        desktopImg={""}
        altText={"funny image about resume"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={motivationalQuoteThree}
        tabletImg={""}
        desktopImg={""}
        altText={"motivational ad"}
        css={"col-span-2"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default SocialMediaAdvertisements;
