import BaseProjectPage from "../../../components/ui/baseProjectPage";
import Picture from "../../../components/ui/picture";

function JrProm() {
  return (
    <BaseProjectPage
      title={"Jr. Prom"}
      description={
        "I had the chance to capture some of the most elegant pictures for these beauties junior prom. " +
        "We decided to go with the brick stone background to compliment all of their outfits. " +
        "Below are the results from this magical day."
      }
    >
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_fill/v1709062593/Jr.%20Prom/nyvpx9b9nuidskrxgejr.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_fill/v1709062593/Jr.%20Prom/nyvpx9b9nuidskrxgejr.jpg"
        }
        desktopImg={""}
        altText={"prom picture one"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_fill/v1709062616/Jr.%20Prom/oxeflvtg5jr0dyln5cj9.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_fill/v1709062616/Jr.%20Prom/oxeflvtg5jr0dyln5cj9.jpg"
        }
        desktopImg={""}
        altText={"prom picture two"}
        css={""}
      ></Picture>
      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_crop,g_north/v1709062704/Jr.%20Prom/im5qlmaxgghdxjzq47tz.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_crop,g_north/v1709062704/Jr.%20Prom/im5qlmaxgghdxjzq47tz.jpg"
        }
        desktopImg={""}
        altText={"prom picture six"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_16:10,c_fill/v1709062625/Jr.%20Prom/rrrospqvpfprppufzoby.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_12:10,c_fill/v1709062625/Jr.%20Prom/rrrospqvpfprppufzoby.jpg"
        }
        desktopImg={""}
        altText={"prom picture three"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_12:10,c_crop,g_north/v1709062664/Jr.%20Prom/s8qj98nampj8zrjhxlrz.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_12:10,c_crop,g_north/v1709062664/Jr.%20Prom/s8qj98nampj8zrjhxlrz.jpg"
        }
        desktopImg={""}
        altText={"prom picture four"}
        css={""}
      ></Picture>

      <Picture
        mobileImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_12:10,c_fill,g_auto/v1709062681/Jr.%20Prom/zbjksrohior2hbdfbgg1.jpg"
        }
        tabletImg={
          "https://res.cloudinary.com/dxwqyspsy/image/upload/q_30,ar_12:10,c_fill,g_auto/v1709062681/Jr.%20Prom/zbjksrohior2hbdfbgg1.jpg"
        }
        desktopImg={""}
        altText={"prom picture five"}
        css={""}
      ></Picture>
    </BaseProjectPage>
  );
}

export default JrProm;
