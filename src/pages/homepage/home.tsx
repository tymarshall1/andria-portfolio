import reviewStars from "./assets/reviewStars.svg";
import Picture from "../../components/picture";
import instagram from "../../assets/instagram.svg";
import google from "../../assets/googlePlus.svg";
import linkedin from "../../assets/linkedin.svg";
import profilePicture from "./assets/profile-picture.jpg";
import advertisement from "./assets/advertisement.svg";
import photoManip from "./assets/photoManip.svg";
import branding from "./assets/branding.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import reviewCircle from "./assets/reviewCircles.svg";
import test from "../../assets/test.txt";
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
      <div className="grid gap-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
        <h2 className="text-xl font-extrabold text-white font-inter">
          Hello It's Me
        </h2>
        <div className="mb-2">
          <h1 className="text-6xl font-extrabold text-white font-inter">
            Andria Moore
          </h1>
          <h2 className="text-xl font-extrabold text-white font-inter">
            I'm a <span className="text-tertiaryOne">Graphic Designer</span>
          </h2>
        </div>
        <p className="text-sm font-normal text-white font-inter max-w-[518px] mb-4">
          Hi! I'm a creative Graphic Designer with a talent for developing
          unique custom artwork. I have an innovative approach to ideas and
          concept development.
        </p>
        <div className="flex gap-5 mb-1">
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
        <a
          href={test}
          download="test"
          className="p-2 mt-2 bg-tertiaryOne max-w-[170px] rounded-lg font-inter text-primary font-black text-base mb-6 text-center max-h-10"
        >
          Download My CV
        </a>
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
    <div className="flex flex-col items-center justify-center gap-3 p-4 mb-6 text-center rounded shadow-2xl bg-tertiaryTwo lg:p-10">
      <img src={props.imgLink} alt={props.imgAlt} className="h-12" />
      <h2 className="font-extrabold text-white font-inter">{props.title}</h2>
      <p className="max-w-md text-xs font-semibold text-white font-inter">
        {props.description}
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="p-8 bg-secondary">
      <h1 className="p-4 text-2xl font-extrabold text-center text-white font-inter lg:row-span-2 lg:col-start-2 lg:col-end-3">
        My Skills
      </h1>
      <div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
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

type CustomerReviewCardProps = {
  review: string;
  reviewAuthor: string;
};

function CustomerReviewCard(props: CustomerReviewCardProps) {
  return (
    <div
      id="reviewCard"
      className={`flex flex-col items-center justify-between px-2 py-5 text-center text-white rounded
       bg-tertiaryTwo font-inter min-h-60 shadow-2xl`}
    >
      <img src={reviewStars} alt="five stars" className="h-8" />
      <p className="max-w-screen-md text-xs font-semibold">{props.review}</p>
      <p className="text-xs font-semibold">{props.reviewAuthor}</p>
    </div>
  );
}

function CustomerReviews() {
  const [swapReview, setSwapReview] = useState(0);

  const reviews = [
    <CustomerReviewCard
      review="As an Internship manager, I was impressed by her work ethic, marketing
              designs, innovative book designs, logos, and managerial skills. She is a
              hard-working young lady with a great sense of humor and commitment to
              her duty. She was always ready to go the extra mile to provide
              high-quality customer service."
      reviewAuthor="-Aldin Beslagic"
    />,

    <CustomerReviewCard
      review="I reached out to Andria after seeing some of the different ads and book covers that she
              completed on her Instagram page. I had no idea where to even start with trying to advertise my business. 
              She created a TON of different logo designs, business cards, and more for me to choose from. 
              I was also able to change specific things and she was great about any changes I wanted to make!! 
              I look forward to using her for ALL my graphic design needs!"
      reviewAuthor="-Rachael Berg"
    />,

    <CustomerReviewCard
      review="I am so glad that I went to Andria for help with my flyer/poster for my
              up-incoming business. Andria made me my advertisement in a quick and speedy manor, 
              while also making the product look amazing. She asked for feedback on how I felt on the poster, 
              and when I gave her feedback, she fixed it immediately. Great customer service, great product, overall 10/10."
      reviewAuthor="-Tyler Geiger"
    />,
  ];

  function handleCardChangeArrow(
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    if (e.currentTarget.alt === "left arrow") {
      if (swapReview - 1 >= 0) {
        setSwapReview(swapReview - 1);
      }
    } else {
      if (swapReview + 1 <= 2) {
        setSwapReview(swapReview + 1);
      }
    }
  }
  return (
    <section className="px-4 py-8 mx-auto ">
      <h1 className="mb-4 text-2xl font-extrabold text-center text-white font-inter">
        My Reviews
      </h1>
      {reviews[swapReview]}
      <div className="flex items-center justify-center gap-2 mt-4">
        <img
          src={arrowLeft}
          alt="left arrow"
          className={`transition-opacity h-11 w-11 hover:cursor-pointer ${
            swapReview - 1 === -1 ? "opacity-25" : "opacity-100"
          }`}
          onClick={(e) => {
            handleCardChangeArrow(e);
          }}
        />
        <div id="slideCircles" className="flex gap-2">
          <img
            src={reviewCircle}
            alt=""
            onClick={() => setSwapReview(0)}
            className={`w-2 h-2 transition-transform ${
              swapReview === 0 ? "scale-150" : "scale-100"
            }`}
          />
          <img
            src={reviewCircle}
            alt=""
            onClick={() => setSwapReview(1)}
            className={`w-2 h-2 transition-transform ${
              swapReview === 1 ? "scale-150" : "scale-100"
            }`}
          />
          <img
            src={reviewCircle}
            alt=""
            onClick={() => setSwapReview(2)}
            className={`w-2 h-2 transition-transform ${
              swapReview === 2 ? "scale-150" : "scale-100"
            }`}
          />
        </div>
        <img
          src={arrowRight}
          alt="right arrow"
          onClick={(e) => handleCardChangeArrow(e)}
          className={`transition-opacity h-11 w-11 hover:cursor-pointer ${
            swapReview + 1 === reviews.length ? "opacity-25" : "opacity-100"
          }`}
        />
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <CustomerReviews />
    </>
  );
}

export default Home;
