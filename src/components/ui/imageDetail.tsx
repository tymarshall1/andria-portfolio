import { useEffect, useState } from "react";

type ImageDetailProps = {
  desktopImg: string;
  closeImage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function ImageDetail(props: ImageDetailProps) {
  const [disableScroll, setDisableScroll] = useState(true);

  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [disableScroll]);
  return (
    <div className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen text-black bg-primary">
      <div className="flex flex-col lg:max-w-3xl md:max-w-xl">
        <img src={props.desktopImg} className="flex-1" alt="" />
        <button
          className="px-4 py-2 mx-2 mt-4 text-lg font-semibold rounded md:mx-0 bg-tertiaryOne"
          onClick={(e) => {
            setDisableScroll((prevState) => !prevState);
            props.closeImage(e);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ImageDetail;
