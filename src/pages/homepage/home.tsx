// import reviewStars from "./assets/reviewStars.svg";
// import backgroundImgMobile from "./assets/background.png";
import Picture from "../../components/picture";
// import brand from "./assets/brand.png";
// import photography from "./assets/photography.png";
// import advertisements from "./assets/advertisements.png";
// import webDesign from "./assets/webDesign.png";
import instagram from "../../assets/instagram.svg";
import google from "../../assets/googlePlus.svg";
import linkedin from "../../assets/linkedin.svg";
import profilePicture from "./assets/profile-picture.jpg";
import advertisement from "./assets/advertisement.svg";
import photoManip from "./assets/photoManip.svg";
import branding from "./assets/branding.svg";
import { Link } from "react-router-dom";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// function Banner() {
//   return (
//     <div className="relative bg-tertiaryTwo">
//       <Picture
//         mobileImg={backgroundImgMobile}
//         tabletImg={""}
//         desktopImg={""}
//         altText={"background hero"}
//         css={""}
//       />
//       <div className="absolute bg-[#6B705C6E] inset-0"></div>
//     </div>
//   );
// }

// function AboutMe() {
//   return (
//     <section className="relative p-8 text-center text-white bg-tertiaryTwo">
//       <h1 className="mb-4 text-base font-normal font-koulen">A BIT ABOUT ME</h1>
//       <p className="mb-6 text-sm font-normal font-manjari">
//         Hi! I'm Andria, a creative Graphic Designer with a talent for developing
//         unique custom artwork. I have an innovative approach to ideas and
//         concept development. I enjoy all areas of design; however, I specialize
//         in brand identity, package design, photo manipulation, as well as
//         digital and print advertisements. My mission is to inspire other
//         companies and help them meet their goals and expectations to succeed in
//         the business.
//       </p>
//       <div className="wave">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             className="wave-about"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// }

// function WhyWorkWithMe() {
//   return (
//     <section className="relative p-4 bg-tertiaryOne">
//       <h1 className="mb-4 text-base font-bold text-center font-koulen text-tertiaryTwo">
//         WHY YOU SHOULD WORK WITH ME
//       </h1>
//       <div className="grid grid-flow-col gap-4 mb-6">
//         <div>
//           <h2 className="text-2xl text-black font-manjari">01.</h2>
//           <p className="text-xs text-black font-manjari">
//             Having a memorable brand is the most important aspect of a company.
//             I have the skills to take your company to the next level.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl text-black font-manjari">02.</h2>
//           <p className="text-xs text-black font-manjari">
//             My mission is to help businesses create a captivating brand through
//             the power of storytelling.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl text-black font-manjari">03.</h2>
//           <p className="text-xs text-black font-manjari">
//             With my skills I can bring your brand to life with a consistent
//             brand design across all social platforms.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-2xl text-black font-manjari">04.</h2>
//           <p className="text-xs text-black font-manjari">
//             Communication is the key to portraying the message that you want
//             your business to send to. Let's chat and get your business on the
//             track to success.
//           </p>
//         </div>
//       </div>
//       <div className="wave">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             className="wave-why"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   return (
//     <section className="relative grid grid-cols-2 gap-4 p-4 text-center bg-white justify-items-center">
//       <h1 className="col-span-2 mb-2 text-base font-koulen">My Services</h1>
//       <div className="relative">
//         <Picture
//           mobileImg={brand}
//           tabletImg={""}
//           desktopImg={""}
//           altText={"branding"}
//           css={""}
//         />
//         <div className="absolute bg-[#6B705CD6] inset-0 z-0 flex items-center justify-center">
//           <p className="z-10 text-base font-normal text-white font-koulen">
//             BRANDING
//           </p>
//         </div>
//       </div>
//       <div className="relative">
//         <Picture
//           mobileImg={photography}
//           tabletImg={""}
//           desktopImg={""}
//           altText={"photo manipulation"}
//           css={""}
//         />
//         <div className="absolute bg-[#6B705CD6] inset-0 z-0 flex items-center justify-center">
//           <p className="z-10 text-base font-normal text-white font-koulen">
//             PHOTO MANIPULATION
//           </p>
//         </div>
//       </div>
//       <div className="relative">
//         <Picture
//           mobileImg={webDesign}
//           tabletImg={""}
//           desktopImg={""}
//           altText={"web design"}
//           css={""}
//         />
//         <div className="absolute bg-[#6B705CD6] inset-0 z-0 flex items-center justify-center">
//           <p className="z-10 text-base font-normal text-white font-koulen">
//             WEB DESIGN
//           </p>
//         </div>
//       </div>
//       <div className="relative">
//         <Picture
//           mobileImg={advertisements}
//           tabletImg={""}
//           desktopImg={""}
//           altText={"advertisements"}
//           css={""}
//         />
//         <div className="absolute bg-[#6B705CD6] inset-0 z-0 flex items-center justify-center">
//           <p className="z-10 text-base font-normal text-white font-koulen">
//             ADVERTISEMENTS
//           </p>
//         </div>
//       </div>
//       <div className="wave">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             className="wave-customers"
//           ></path>
//         </svg>
//       </div>
//       <div className="mb-8"></div>
//     </section>
//   );
// }

// type CustomerReviewCardProps = {
//   review: string;
//   reviewAuthor: string;
// };

// function CustomerReviewCard(props: CustomerReviewCardProps) {
//   return (
//     <div
//       id="reviewCard"
//       className={`flex flex-col items-center justify-between px-2 py-5 text-xs font-normal text-center text-white rounded
//        bg-tertiaryTwo font-manjari min-h-60 mx-4`}
//     >
//       <img src={reviewStars} alt="five stars" className="h-8" />
//       <p className="">{props.review}</p>
//       <p className="">{props.reviewAuthor}</p>
//     </div>
//   );
// }

// function CustomerReviews() {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <Carousel responsive={responsive} className="py-6 bg-secondary">
//       <CustomerReviewCard
//         review="As an Internship manager, I was impressed by her work ethic, marketing
//               designs, innovative book designs, logos, and managerial skills. She is a
//               hard-working young lady with a great sense of humor and commitment to
//               her duty. She was always ready to go the extra mile to provide
//               high-quality customer service."
//         reviewAuthor="-Aldin Beslagic"
//       />

//       <CustomerReviewCard
//         review="I reached out to Andria after seeing some of the different ads and book covers that she
//               completed on her Instagram page. I had no idea where to even start with trying to advertise my business.
//               She created a TON of different logo designs, business cards, and more for me to choose from.
//               I was also able to change specific things and she was great about any changes I wanted to make!!
//               I look forward to using her for ALL my graphic design needs!"
//         reviewAuthor="-Rachael Berg"
//       />

//       <CustomerReviewCard
//         review="I am so glad that I went to Andria for help with my flyer/poster for my
//               up-incoming business. Andria made me my advertisement in a quick and speedy manor,
//               while also making the product look amazing. She asked for feedback on how I felt on the poster,
//               and when I gave her feedback, she fixed it immediately. Great customer service, great product, overall 10/10."
//         reviewAuthor="-Tyler Geiger"
//       />
//     </Carousel>
//   );
// }

function Hero() {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-2 lg:p-8">
      <div className="flex items-center justify-center lg:col-start-2 lg:col-end-3">
        <Picture
          mobileImg={profilePicture}
          tabletImg={""}
          desktopImg={""}
          altText={"profile picture of andria moore."}
          css={""}
          imgCss="rounded-full h-60"
        ></Picture>
      </div>
      <div className="grid gap-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
        <h2 className="text-xl font-extrabold text-white font-inter">
          Hello It's Me
        </h2>
        <h1 className="text-6xl font-extrabold text-white font-inter">
          Andria Moore
        </h1>
        <h2 className="text-xl font-extrabold text-white font-inter">
          And I'm a <span className="text-tertiaryOne">Graphic Designer</span>
        </h2>
        <p className="text-sm font-normal text-white font-inter max-w-[518px]">
          Hi! I'm Andria, a creative Graphic Designer with a talent for
          developing unique custom artwork. I have an innovative approach to
          ideas and concept development.
        </p>
        <div className="flex gap-5">
          <Link to={"/"}>
            <img
              src={instagram}
              className="h-10"
              alt="link to instagram page"
            />
          </Link>
          <Link to={"/"}>
            <img src={google} className="h-10" alt="link to google plus page" />
          </Link>
          <Link to={"/"}>
            <img src={linkedin} className="h-10" alt="link to linkedin page" />
          </Link>
        </div>
        <button className="py-.5 mt-2 bg-tertiaryOne max-w-[170px] rounded-lg font-inter text-black font-black text-base mb-2">
          Download My CV
        </button>
      </div>
    </div>
  );
}

type SingleSkillProps = {
  imgLink: string;
  imgAlt: string;
  title: string;
  description: string;
};

function SingleSkill(props: SingleSkillProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 mb-6 text-center rounded bg-tertiaryTwo">
      <img src={props.imgLink} alt={props.imgAlt} className="h-12" />
      <h2 className="text-white font-inter font">{props.title}</h2>
      <p className="max-w-md text-sm text-white font-inter">
        {props.description}
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="p-4 bg-secondary">
      <h1 className="p-4 text-2xl font-extrabold text-center text-white font-inter lg:row-span-2 lg:col-start-2 lg:col-end-3">
        My skills
      </h1>
      <div className="gap-4 lg:grid lg:grid-cols-3">
        <SingleSkill
          imgLink={branding}
          imgAlt={""}
          title={"Branding"}
          description={
            "Having a memorable brand is the most important aspect of a company. I have the skills to take your company to the next level."
          }
        />
        <SingleSkill
          imgLink={advertisement}
          imgAlt={""}
          title={"Advertisements"}
          description={
            "With my skills I can bring your brand to life with the power of knowledge, design, and imagination. A consistent brand design across all social platforms is just as important as the brand itself.  "
          }
        />
        <SingleSkill
          imgLink={photoManip}
          imgAlt={""}
          title={"Photo Manipulation"}
          description={
            "With my skills I can bring your brand to life with the power of knowledge, design, and imagination. A consistent brand design across all social platforms is just as important as the brand itself.  "
          }
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      {/* <Banner />
      <AboutMe />
      <WhyWorkWithMe />
      <Services />
      <CustomerReviews /> */}
    </>
  );
}

export default Home;
