import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

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
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080036/Rehoboth%20Beach/l8bik26zerjyak5fouwr.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill/v1709080036/Rehoboth%20Beach/l8bik26zerjyak5fouwr.jpg"
        }
        desktopImg={""}
        altText={"rehobeth grass"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080042/Rehoboth%20Beach/q6fbj1rcjnabtypcwgju.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill/v1709080042/Rehoboth%20Beach/q6fbj1rcjnabtypcwgju.jpg"
        }
        desktopImg={""}
        altText={"rehobeth grass"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080049/Rehoboth%20Beach/clrrn99dzmvja3s4ikfc.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill/v1709080049/Rehoboth%20Beach/clrrn99dzmvja3s4ikfc.jpg"
        }
        desktopImg={""}
        altText={"rehobeth dusk"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080020/Rehoboth%20Beach/ztlsjhgeto02bguxmijc.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:10,c_fill/v1709080020/Rehoboth%20Beach/ztlsjhgeto02bguxmijc.jpg"
        }
        desktopImg={""}
        altText={"rehobeth silhouette"}
        css={""}
      ></Picture>
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709080028/Rehoboth%20Beach/cc47jkanqxaoxsy7gbxr.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_16:5,c_fill/v1709080028/Rehoboth%20Beach/cc47jkanqxaoxsy7gbxr.jpg"
        }
        desktopImg={""}
        altText={"rehobeth trees silhouette"}
        css={"col-span-2"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default RehobethBeach;
