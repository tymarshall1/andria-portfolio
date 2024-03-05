import { useState } from "react";
import loadingIcon from "../../assets/loading.svg";
import ImageDetail from "./imageDetail";

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
    //had to add flex onto these b/c safari wasn't interpreting height-100%
    // properly, causing images to overflow their grid area.
    <picture onClick={openImage} className={`flex ${props.css}`}>
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
        <ImageDetail
          desktopImg={props.desktopImg}
          closeImage={closeImage}
        ></ImageDetail>
      )}
    </picture>
  );
}

export default Picture;
