import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import businessCardsMobile from "./assets/business-cards-mobile.png";
import logoMobile from "./assets/logo-mobile.png";
import rachaelsNameMobile from "./assets/rachaels-name-mobile.png";
function RachaelsBakery() {
  return (
    <BaseProjectPage
      title={"Rachael’s Bakery"}
      description={
        "One of my very best friends decided she wanted to begin her journey starting her own freelancing business. " +
        "She has been a pastry chef for several years, and has worked under an abundance of talented bakers. " +
        "She is one of my most recent clients as I am designing her brand."
      }
    >
      <Picture
        mobileImg={rachaelsNameMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"Rachaels name banner"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={logoMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"Rachaels logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={businessCardsMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"Rachaels Buisness cards"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default RachaelsBakery;
