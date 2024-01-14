import BaseProjectPage from "../../../components/baseProjectPage";
import Picture from "../../../components/picture";
import brandPatternMobile from "./assets/brand-pattern-mobile.png";
import businessCardsMobile from "./assets/business-cards-mobile.png";
import coffeeMugMobile from "./assets/coffee-mug-mobile.png";
import companyNameMobile from "./assets/company-name-mobile.png";
import condoBuildingMobile from "./assets/condo-building-mobile.png";
import keystoneLogoMobile from "./assets/keystone-logo-mobile.png";
import tshirtMobile from "./assets/tshirt-mobile.png";

function Keystone() {
  return (
    <BaseProjectPage
      title={"Keystone Condominiums"}
      description={`For this project I created a luxury condominium called Keystone that is projected to be in Tampa Florida. 
      The guide was to create a branding logo that can be displayed on multiple items.`}
      optionalExtraDescription={
        <p className="text-xs font-normal text-black font-manjari">
          <span className="font-bold">Brand Strategy:</span> I first wanted to
          start off by choosing a really strong font that could stand alone as a
          brand mark and also apart of the whole name. I then had to identify
          what brand colors I wanted to go with. Since the company wants to
          showcase a luxurious look and feel I went with 3 shades of purple.
          From there I wanted to design a logo mark that represents the company.
          So, I decided to take the K in Keystone and incorporate a sharp condo
          look and feel. My goal for this branding project was to give this
          company a whole new look and feel and the right start to attracting
          new clients."
        </p>
      }
    >
      <Picture
        mobileImg={keystoneLogoMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={condoBuildingMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone condo building"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={coffeeMugMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone coffee mugs"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={tshirtMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone tshirts"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={businessCardsMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone business cards"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={companyNameMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone company banner"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={brandPatternMobile}
        tabletImg={""}
        desktopImg={""}
        altText={"keystone brand pattern"}
        css={"col-span-2"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default Keystone;
