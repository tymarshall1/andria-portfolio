import { useState } from "react";
import loadingIcon from "../assets/loading.svg";
// import closeBtn from "../assets/closeBtn.svg";
type PictureProps = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  altText: string;
  css: string;
  imgCss?: string;
  canFullScreen?: boolean;
};

Picture.defaultProps = {
  canFullScreen: true,
};

function Picture(props: PictureProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function openImage() {
    setIsFullscreen(true);
  }

  function closeImage(e: { stopPropagation: () => void }) {
    setIsFullscreen(false);
    e.stopPropagation();
  }

  return (
    <picture onClick={openImage} className={`${props.css}`}>
      <source srcSet={props.tabletImg} media="(min-width: 1024px)" />
      <source srcSet={props.desktopImg} media="(min-width: 1536px)" />
      {isLoading && (
        <div className="flex items-center justify-center">
          <img src={loadingIcon} alt="loading" />
        </div>
      )}
      <img
        onLoad={() => setIsLoading(false)}
        src={props.mobileImg}
        alt={props.altText}
        className={`max-w-full lg:h-auto ${
          props.imgCss === undefined ? "" : props.imgCss
        }`}
      />

      {isFullscreen && props.canFullScreen && (
        <div className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen text-black bg-primary">
          {/* <img
            src={closeBtn}
            alt="close"
            className="w-10 h-10 mb-5 mr-5"
            onClick={closeImage}
          /> */}
          <div className="m-2 bg-white ">
            <img
              src={props.tabletImg}
              className="p-4 opacity-1"
              alt=""
              onClick={closeImage}
            />
          </div>
        </div>
      )}
    </picture>
  );
}

export default Picture;
