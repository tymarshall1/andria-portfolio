import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import ducks from "./assets/ducks-in-pond.png";
import ducksSwimming from "./assets/ducks-swimming-in-pond-1.png";
import flower from "./assets/flower.png";
import fountain from "./assets/fountain-in-slow-motion-action.png";
import veteransCemetery from "./assets/veterans-cemetary.png";
import lumsPond from "./assets/lums-pond.png";
function VeteransCemetery() {
  return (
    <BaseProjectPage
      title={"Veterans Cemetery"}
      description={
        "These astonishing photos were taken at the Veterans Cemetery in Newark Delaware. " +
        "I was tasked with taking a multitude of photos to capture the beauty of the place. " +
        "Also, a few of the pictures at the bottom were taken at Lum's pond state park not far from the cemetery."
      }
    >
      <Picture
        mobileImg={veteransCemetery}
        tabletImg={""}
        desktopImg={""}
        altText={"fountains at veterans cemetery"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={fountain}
        tabletImg={""}
        desktopImg={""}
        altText={"single fountain"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={ducksSwimming}
        tabletImg={""}
        desktopImg={""}
        altText={"ducks in water"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={ducks}
        tabletImg={""}
        desktopImg={""}
        altText={"ducks in water"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={flower}
        tabletImg={""}
        desktopImg={""}
        altText={"flower"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={lumsPond}
        tabletImg={""}
        desktopImg={""}
        altText={"boats at lums pond"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default VeteransCemetery;