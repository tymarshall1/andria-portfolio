type PictureProps = {
  mobileImg: string;
  tabletImg: string;
  desktopImg: string;
  altText: string;
  css: string;
  imgCss?: string;
};

function Picture(props: PictureProps) {
  return (
    <picture className={props.css}>
      <source srcSet={props.tabletImg} media="(min-width: 1024px)" />
      <source srcSet={props.desktopImg} media="(min-width: 1536px)" />
      <img
        src={props.mobileImg}
        alt={props.altText}
        className={`max-w-full object-fit h-full ${props.imgCss}`}
      />
    </picture>
  );
}

export default Picture;
