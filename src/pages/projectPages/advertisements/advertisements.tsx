import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

function Advertisements() {
  return (
    <BaseProjectPage
      title={"Advertisements"}
      description={
        "During my internship with Bestlogic Staffing I was tasked with designing " +
        "advertisements for digital and print use for the staffing company. " +
        "I had the creative freedom to design whatever I pleased so, after looking " +
        "into the company and at past posts I decided to create posts for jobs they were " +
        "hiring for, motivational quotes, and ads that could be placed on a billboard."
      }
    >
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_1:1,c_fill/v1709080141/Social%20Media%20Advertisements/qk8xsfvlvkhuthtjulny.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_1:1,c_fill/v1709080141/Social%20Media%20Advertisements/qk8xsfvlvkhuthtjulny.png"
        }
        desktopImg={""}
        altText={"join us ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080142/Social%20Media%20Advertisements/qhaairoximp153lliwo8.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/h_1080,w_1728/v1709080142/Social%20Media%20Advertisements/qhaairoximp153lliwo8.png"
        }
        desktopImg={""}
        altText={"motivational Quote"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080142/Social%20Media%20Advertisements/cl80krkg8hy7ks738fl4.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080142/Social%20Media%20Advertisements/cl80krkg8hy7ks738fl4.jpg"
        }
        desktopImg={""}
        altText={"we are hiring ad"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080142/Social%20Media%20Advertisements/sfjxbzwwhtjbq9xcufud.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080142/Social%20Media%20Advertisements/sfjxbzwwhtjbq9xcufud.png"
        }
        desktopImg={""}
        altText={"jobs just for you ad"}
        css={"col-span-2"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_1:1,c_fill/v1709080141/Social%20Media%20Advertisements/ejbjtranazhymjalld6o.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_1:1,c_fill/v1709080141/Social%20Media%20Advertisements/ejbjtranazhymjalld6o.png"
        }
        desktopImg={""}
        altText={"hat with logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080141/Social%20Media%20Advertisements/rr2qmszy8swsxvvs0bho.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080141/Social%20Media%20Advertisements/rr2qmszy8swsxvvs0bho.png"
        }
        desktopImg={""}
        altText={"how to build a brand identity"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default Advertisements;
