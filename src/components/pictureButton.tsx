import { Link } from "react-router-dom";

type PictureButtonProps = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  altText: string;
  css: string;
  to: string;
};

function PictureButton(props: PictureButtonProps) {
  return (
    <Link to={props.to}>
      <picture className={props.css}>
        <source srcSet={props.tabletImg} media="(min-width: 1024px)" />
        <source srcSet={props.desktopImg} media="(min-width: 1536px)" />
        <img src={props.mobileImg} alt={props.altText} className="max-w-full" />
      </picture>
    </Link>
  );
}

export default PictureButton;
