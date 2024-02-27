import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";
import businessCardsMobile from "./assets/business-cards-mobile.png";
import logoMobile from "./assets/logo-mobile.png";
import rachaelsNameMobile from "./assets/rachaels-name-mobile.png";
import mugsMobile from "./assets/rachaels-coffee-cups-moblie.png";
import bagsMobile from "./assets/rachaels-take-home-bags-mobile.png";
import tshirtsMobileOne from "./assets/tshirt-design-1-rachael-mobile.png";
import tshirtsMobileTwo from "./assets/tshirt-design-2-rachael-mobile.png";

import businessCardsTablet from "./assets/RB-bus-cards-web.png";
import logoTablet from "./assets/RB-logo-web.png";
import rachaelsNameTablet from "./assets/RB-Name-logo-web.png";
import mugsTablet from "./assets/RB-cups-web.png";
import bagsTablet from "./assets/RB-bags-web.png";
import tshirtsTabletOne from "./assets/RB-tshirt-1-web.png";
import tshirtsTabletTwo from "./assets/RB-tshirts-2-web.png";

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
        tabletImg={rachaelsNameTablet}
        desktopImg={""}
        altText={"Rachaels name banner"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={logoMobile}
        tabletImg={logoTablet}
        desktopImg={""}
        altText={"Rachaels logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={businessCardsMobile}
        tabletImg={businessCardsTablet}
        desktopImg={""}
        altText={"Rachaels Business cards"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={mugsMobile}
        tabletImg={mugsTablet}
        desktopImg={""}
        altText={"Rachaels mug design "}
        css={""}
      ></Picture>

      <Picture
        mobileImg={bagsMobile}
        tabletImg={bagsTablet}
        desktopImg={""}
        altText={"Rachaels bags design"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={tshirtsMobileOne}
        tabletImg={tshirtsTabletOne}
        desktopImg={""}
        altText={"Rachaels t-shirt designs"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={tshirtsMobileTwo}
        tabletImg={tshirtsTabletTwo}
        desktopImg={""}
        altText={"Rachaels t-shirt designs"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default RachaelsBakery;
