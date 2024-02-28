import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";
import picture1 from "./assets/pic-1-mobile.png";
import picture2 from "./assets/pic-2-mobile.png";
import picture3 from "./assets/pic-3-mobile.png";
import picture4 from "./assets/pic-4-mobile.png";
import picture5 from "./assets/pic-5-mobile.png";

function RehobethBeach() {
  return (
    <BaseProjectPage
      title={"Rehoboth Beach"}
      description={
        "These pictures were captured at Cape Henlopen state park. " +
        "My goal was to capture silhouettes and I was able to do just that. " +
        "I went to the beach right around sunset to get these photos."
      }
    >
      <Picture
        mobileImg={picture1}
        tabletImg={""}
        desktopImg={""}
        altText={"rehobeth grass"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={picture2}
        tabletImg={""}
        desktopImg={""}
        altText={"rehobeth grass"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={picture3}
        tabletImg={""}
        desktopImg={""}
        altText={"rehobeth dusk"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={picture4}
        tabletImg={""}
        desktopImg={""}
        altText={"rehobeth silhouette"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={picture5}
        tabletImg={""}
        desktopImg={""}
        altText={"rehobeth water"}
        css={"col-span-2"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default RehobethBeach;
