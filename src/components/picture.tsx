import { useState } from "react";
import loadingIcon from "../assets/loading.svg";
type PictureProps = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  altText: string;
  css: string;
  imgCss?: string;
};

function Picture(props: PictureProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <picture className={`${props.css}`}>
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
        className={`max-w-full  ${
          props.imgCss === undefined ? "" : props.imgCss
        }`}
      />
    </picture>
  );
}

export default Picture;
