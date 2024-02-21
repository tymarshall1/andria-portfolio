import { Link } from "react-router-dom";
import { useState } from "react";
import loadingIcon from "../assets/loading.svg";

type PictureButtonProps = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  altText: string;
  css: string;
  to: string;
};

function PictureButton(props: PictureButtonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link to={props.to}>
      <picture className={props.css}>
        <source srcSet={props.tabletImg} media="(min-width: 1024px)" />
        <source srcSet={props.desktopImg} media="(min-width: 1536px)" />
        {isLoading && (
          <div className="flex items-center justify-center">
            <img src={loadingIcon} alt="loading" />
          </div>
        )}
        <img
          src={props.mobileImg}
          alt={props.altText}
          className="max-w-full lg:h-auto"
          onLoad={() => setIsLoading(false)}
        />
      </picture>
    </Link>
  );
}

export default PictureButton;
