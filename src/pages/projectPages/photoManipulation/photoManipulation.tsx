import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";
import scratchedBoyMobile from "./assets/pic-5-mobile.png";
import fixedBoyMobile from "./assets/pic-6-mobile.png";
import girlOnBeachMobile from "./assets/pic-2-mobile.png";
import girlOnBeachBackgroundMobile from "./assets/pic-3-mobile.png";
import headPhonesBackground from "./assets/pic-1-mobile.png";
import crowsBackground from "./assets/pic-4-mobile.png";
import buildingPerspectiveOne from "./assets/pic-7-mobile.png";
import buildingPerspectiveTwo from "./assets/pic-8-mobile.png";

// import scratchedBoyTablet from "./assets/Pic-2-Damaged.png";
// import fixedBoyTablet from "./assets/Pic-1-Repaired.png";
// import girlOnBeachTablet from "./assets/Pic-3-Original.png";
// import girlOnBeachBackgroundTablet from "./assets/Pic-4-repaired.png";
// import headPhonesBackTablet from "./assets/Pic-7-Marshall-headphones.png";
// import crowsBackTablet from "./assets/Pic-8-dark-times.png";
// import buildingPerspectTablet from "./assets/Pic-5-original.png";
// import buildingPerspectfixedTablet from "./assets/Pic-6-Repaired.png";

function PhotoManipulation() {
  return (
    <BaseProjectPage
      title={"Photo Manipulation"}
      description={
        "My photos below showcase some photo manipulation and retouching. " +
        "I wanted to showcase my skills from just changing the background of a photo, to reconstructing an old image. " +
        "As well as using my creative freedom to design expressive images in photoshop."
      }
    >
      <Picture
        mobileImg={scratchedBoyMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"damaged image of boy"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={fixedBoyMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"fixed boy image"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={girlOnBeachMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"girl on beach with regular background"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={girlOnBeachBackgroundMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"girl on beach with enhanced background"}
        css={"lg:row-start-2 lg:col-start-2 lg:col-end-3"}
      ></Picture>

      <Picture
        mobileImg={headPhonesBackground}
        tabletImg={""}
        desktopImg={""}
        altText={"guy wearing headphones with swirl background"}
        css={"lg:row-start-1 lg:col-start-3 lg:col-end-4"}
      ></Picture>

      <Picture
        mobileImg={crowsBackground}
        tabletImg={""}
        desktopImg={""}
        altText={"guy standing in woods with crows"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={buildingPerspectiveOne}
        tabletImg={""}
        desktopImg={""}
        altText={"building photo whole"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={buildingPerspectiveTwo}
        tabletImg={""}
        desktopImg={""}
        altText={"building photo changed perspective"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default PhotoManipulation;
