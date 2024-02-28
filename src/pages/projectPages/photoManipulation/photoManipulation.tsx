import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

function PhotoManipulation() {
  return (
    <BaseProjectPage
      title={"Photo Manipulation"}
      description={
        "My photos below showcase some photo manipulation and retouching. " +
        "I wanted to showcase my skills from just changing the background of a photo, to reconstructing an old image. " +
        "As well as using my creative freedom to design expressive images in photoshop."
      }
    >
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079311/Photo%20Manipulation/muhagp45ibyishmmv1oa.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_10:9,c_fill/v1709079311/Photo%20Manipulation/muhagp45ibyishmmv1oa.jpg"
        }
        desktopImg={""}
        altText={"damaged image of boy"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079311/Photo%20Manipulation/ib4jgbc9jvoqnluev2lk.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/ar_10:9,c_fill/v1709079311/Photo%20Manipulation/ib4jgbc9jvoqnluev2lk.jpg"
        }
        desktopImg={""}
        altText={"fixed boy image"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079294/Photo%20Manipulation/qxlbvmk8zfd3k8fo0228.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079294/Photo%20Manipulation/qxlbvmk8zfd3k8fo0228.jpg"
        }
        desktopImg={""}
        altText={"girl on beach with regular background"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079294/Photo%20Manipulation/jwl57tqxfwkuv31pmuzj.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079294/Photo%20Manipulation/jwl57tqxfwkuv31pmuzj.jpg"
        }
        desktopImg={""}
        altText={"girl on beach with enhanced background"}
        css={"lg:row-start-2 lg:col-start-2 lg:col-end-3"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079134/Photo%20Manipulation/kkiapdbg48be1meq5tvw.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/c_fill/v1709079134/Photo%20Manipulation/kkiapdbg48be1meq5tvw.png"
        }
        desktopImg={""}
        altText={"guy wearing headphones with swirl background"}
        css={"lg:row-start-1 lg:col-start-3 lg:col-end-4"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079301/Photo%20Manipulation/dfqdcyw5udydwk4kqtln.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079301/Photo%20Manipulation/dfqdcyw5udydwk4kqtln.jpg"
        }
        desktopImg={""}
        altText={"guy standing in woods with crows"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079404/Photo%20Manipulation/ypom4npzop5ul54uax49.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079404/Photo%20Manipulation/ypom4npzop5ul54uax49.png"
        }
        desktopImg={""}
        altText={"building photo whole"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079426/Photo%20Manipulation/exo9rn0zwdx9bs0uxjsa.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/v1709079426/Photo%20Manipulation/exo9rn0zwdx9bs0uxjsa.png"
        }
        desktopImg={""}
        altText={"building photo changed perspective"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default PhotoManipulation;
