import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

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
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill/v1709079497/Veterans%20Cemetery/vs1t2gylo3lijxhwkknl.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill/v1709079497/Veterans%20Cemetery/vs1t2gylo3lijxhwkknl.jpg"
        }
        desktopImg={""}
        altText={"fountains at veterans cemetery"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_3:2,c_fill/v1709079515/Veterans%20Cemetery/ydsubiuiydghb4yenrsj.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:9,c_fill,g_auto/v1709079515/Veterans%20Cemetery/ydsubiuiydghb4yenrsj.jpg"
        }
        desktopImg={""}
        altText={"single fountain"}
        css={"lg:row-span-1"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_3:2,c_fill/v1709079601/Veterans%20Cemetery/whcxkcn6siipafmgxas2.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_5:4,c_fill/v1709079601/Veterans%20Cemetery/whcxkcn6siipafmgxas2.jpg"
        }
        desktopImg={""}
        altText={"ducks in water"}
        css={"lg:row-span-1"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079614/Veterans%20Cemetery/ywwtilebijjjgkatc5hi.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079614/Veterans%20Cemetery/ywwtilebijjjgkatc5hi.jpg"
        }
        desktopImg={""}
        altText={"ducks in water"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill/v1709079634/Veterans%20Cemetery/buwxhhu01d8nobfjj6ca.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill/v1709079634/Veterans%20Cemetery/buwxhhu01d8nobfjj6ca.jpg"
        }
        desktopImg={""}
        altText={"flower"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill,g_auto/v1709079681/Veterans%20Cemetery/ifsm4bs5qnq1fge0jorj.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill,g_auto/v1709079681/Veterans%20Cemetery/ifsm4bs5qnq1fge0jorj.jpg"
        }
        desktopImg={""}
        altText={"boats at lums pond"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:9,c_fill,g_auto/v1709079535/Veterans%20Cemetery/dcwtey8awiluh0pvrb76.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:9,c_fill,g_auto/v1709079535/Veterans%20Cemetery/dcwtey8awiluh0pvrb76.jpg"
        }
        desktopImg={""}
        altText={"flags at veterans cemetary"}
        css={"lg:row-span-1"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default VeteransCemetery;
