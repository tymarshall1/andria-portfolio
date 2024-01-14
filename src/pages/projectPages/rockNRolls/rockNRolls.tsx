import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import advertMobile from "./assets/advert-mobile.png";
import brandPatternMobile from "./assets/brand-pattern-mobile.png";
import businessCardMobile from "./assets/bus-card-mobile.png";
import cakeBoxMobile from "./assets/cakebox-mobile.png";
import businessNameMobile from "./assets/bus-name-mobile.png";
import coffeeCupMobile from "./assets/coffee-cup-mobile.png";
import loyaltyCardMobile from "./assets/loyalty-cards-mobile.png";
import takeHomeBagMobile from "./assets/take-home-bag-mobile.png";

function RockNRolls() {
  return (
    <BaseProjectPage
      title={"Rock’n Rolls Bakery"}
      description={
        "Rock’n Rolls bakery is my senior project design. I have always had a passion for created brand identities " +
        "for businesses so, my goal for this project was to come up with a kicking bakery name and design to go with it. " +
        "I designed a logo, business cards, loyalty cards, coffee cups, cake boxes, take home bags, a menu, and a landing page for a website. " +
        "I had so much fun designing this brand."
      }
    >
      <Picture
        mobileImg={businessNameMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"business name"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={businessCardMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls business cards"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={loyaltyCardMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls loyalty cards"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={coffeeCupMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls coffee cups"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={cakeBoxMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls cake box design"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={takeHomeBagMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls take home bag"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={advertMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls advertisement"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={brandPatternMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"rock n rolls brand pattern"}
        css={"col-span-2"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default RockNRolls;
