import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";
import artOfTalentMobile from "./assets/art-of-talent-hunting-mobile.png";
import coachingLeadershipMobile from "./assets/coaching-for-leadership-mobile.png";
import myLifeMobile from "./assets/My-life-mobile.png";
import soccerCoachingMobile from "./assets/soccer-coaching-101-mobile.png";
import stayingSaneMobile from "./assets/staying-sane-in-the-digital-age-mobile.png";
function BookCovers() {
  return (
    <BaseProjectPage
      title={"Book Covers"}
      description={
        "For this project I was given an objective of designing front and back book covers for my internship. " +
        "I was solely given titles of the books and had to come up with a design based on that. " +
        "This projects was one of my favorites from the internship. " +
        "After submitting my designs three of the book cover illustrations were chosen to be the covers of published books."
      }
      optionalGridCustom="lg:grid-cols-1"
    >
      <Picture
        mobileImg={artOfTalentMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"art of talent book cover"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={coachingLeadershipMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"coaching for leadership book cover"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={stayingSaneMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"staying sane book cover"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={soccerCoachingMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"soccer Coaching book cover"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={myLifeMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"my life book cover"}
        css={"col-span-2"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default BookCovers;
