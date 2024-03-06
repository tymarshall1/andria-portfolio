import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

function BookCovers() {
  return (
    <BaseProjectPage
      title={"Book Covers"}
      description={
        "For this project I was given an objective of designing front and back book covers for my internship. " +
        "I was solely given titles of the books and had to come up with a design based on that. " +
        "This projects was one of my favorites from the internship. " +
        "After submitting my designs three of the book cover illustrations were chosen to be the covers of published books."
      }
      optionalGridCustom="lg:grid-cols-1"
    >
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709078998/Book%20Covers/vqinyfyt8ommx28ccbcw.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709078998/Book%20Covers/vqinyfyt8ommx28ccbcw.png"
        }
        desktopImg={""}
        altText={"art of talent book cover"}
        css={"col-span-3 lg:px-20"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079014/Book%20Covers/lyrnyfiigunvledqcczb.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079014/Book%20Covers/lyrnyfiigunvledqcczb.png"
        }
        desktopImg={""}
        altText={"coaching for leadership book cover"}
        css={"col-span-3 lg:px-20"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079048/Book%20Covers/h0eyv6i7kty1r2mwtew8.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079048/Book%20Covers/h0eyv6i7kty1r2mwtew8.png"
        }
        desktopImg={""}
        altText={"staying sane book cover"}
        css={"col-span-3 lg:px-20"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079035/Book%20Covers/fhut1u4yujnda715v7ms.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079035/Book%20Covers/fhut1u4yujnda715v7ms.png"
        }
        desktopImg={""}
        altText={"soccer Coaching book cover"}
        css={"col-span-3 lg:px-20"}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079075/Book%20Covers/wc5r16frx08m4rwrmghc.png"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/f_auto,q_70,ar_16:9,c_fill/v1709079075/Book%20Covers/wc5r16frx08m4rwrmghc.png"
        }
        desktopImg={""}
        altText={"my life book cover"}
        css={"col-span-3 lg:px-20"}
      ></Picture>
    </BaseProjectPage>
  );
}

export default BookCovers;
