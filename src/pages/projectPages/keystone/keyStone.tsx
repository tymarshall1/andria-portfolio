import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

function Keystone() {
  return (
    <BaseProjectPage
      title={"Keystone Condominiums"}
      description={`For this project I created a luxury condominium called Keystone that is projected to be in Tampa Florida. 
      The guide was to create a branding logo that can be displayed on multiple items.`}
      optionalExtraDescription={
        <div className="mt-2">
          <h2 className="text-2xl font-bold text-secondary font-inter">
            Brand Strategy:
          </h2>
          <p className="mt-4 text-xs font-normal text-primary font-inter ">
            I first wanted to start off by choosing a really strong font that
            could stand alone as a brand mark and also apart of the whole name.
            I then had to identify what brand colors I wanted to go with. Since
            the company wants to showcase a luxurious look and feel I went with
            3 shades of purple. From there I wanted to design a logo mark that
            represents the company. So, I decided to take the K in Keystone and
            incorporate a sharp condo look and feel. My goal for this branding
            project was to give this company a whole new look and feel and the
            right start to attracting new clients.
          </p>
        </div>
      }
    >
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_400,w_500/v1709059798/Keystone/i4n66ett75feiwto3x5u.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_600,w_700/v1709059798/Keystone/i4n66ett75feiwto3x5u.png"
        }
        desktopImg={""}
        altText={"keystone logo"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill,h_400,w_500/v1709060513/Keystone/ds2pf7hpkmcvoswegvlr.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill,h_600,w_700/v1709060513/Keystone/ds2pf7hpkmcvoswegvlr.png"
        }
        desktopImg={""}
        altText={"keystone condo building"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill,h_400,w_500/v1709059787/Keystone/buycdizpfkt5twyaku2t.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill,h_600,w_700/v1709059787/Keystone/buycdizpfkt5twyaku2t.png"
        }
        desktopImg={""}
        altText={"keystone coffee mugs"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill,h_400,w_500/v1709060591/Keystone/skki3fhwg1xlnwkaxqc0.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill,h_600,w_700/v1709060591/Keystone/skki3fhwg1xlnwkaxqc0.png"
        }
        desktopImg={""}
        altText={"keystone tshirts"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_400,w_500/v1709059655/Keystone/dfesouh1ikleu5r1qboe.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_600,w_700/v1709059655/Keystone/dfesouh1ikleu5r1qboe.jpg"
        }
        desktopImg={""}
        altText={"keystone business cards"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_400,w_500/v1709059766/Keystone/titgi113jlxgpzfjmupn.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_600,w_700/v1709059766/Keystone/titgi113jlxgpzfjmupn.png"
        }
        desktopImg={""}
        altText={"keystone company banner"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/h_200,w_1000/v1709059776/Keystone/yftlzygltbhsqjnplwym.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_scale,h_300,w_2140/v1709059776/Keystone/yftlzygltbhsqjnplwym.png"
        }
        desktopImg={""}
        altText={"keystone brand pattern"}
        css={"col-span-2 lg:col-span-3"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default Keystone;
