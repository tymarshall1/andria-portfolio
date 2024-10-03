import reviewStars from "./assets/reviewStars.svg";
import Picture from "../../components/ui/picture";
import instagram from "../../assets/instagram.svg";
import google from "../../assets/googlePlus.svg";
import linkedin from "../../assets/linkedin.svg";
import profilePicture from "./assets/profile-picture.jpg";
import advertisement from "./assets/advertisement.svg";
import photoManip from "./assets/photoManip.svg";
import branding from "./assets/branding.svg";
import { Link } from "react-router-dom";
import cv from "../../assets/Resume and Coverletter.pdf";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function Hero() {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-2 lg:p-8">
      <div className="flex items-center justify-center lg:col-start-2 lg:col-end-3">
        <Picture
          mobileImg={profilePicture}
          tabletImg={""}
          desktopImg={""}
          altText={"profile picture of Andria Moore."}
          css={""}
          imgCss="rounded-full h-60"
          canFullScreen={false}
        ></Picture>
      </div>
      <div className="grid gap-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:items-end">
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
          concept development. I have experience with designing brands from
          start to finish. From designing logos, business cards, to social media
          advertisements I am here to take your business to the next level. I
          love working in a team as well as independently, I also have
          experience working with other designers, programmers, and copywriters.
          I have excellent research, technical, and problem-solving skills as
          well as detail-oriented and able to learn new concepts quickly.
        </p>
        <div className="flex gap-5 mb-1">
          <Link to={"https://www.instagram.com/andriamooredesigner/"}>
            <img
              src={instagram}
              className="h-10"
              alt="link to instagram page"
            />
          </Link>
          <Link to={"/contact"}>
            <img src={google} className="h-10" alt="link to google plus page" />
          </Link>
          <Link to={"https://www.linkedin.com/in/andriamooredesigner/"}>
            <img src={linkedin} className="h-10" alt="link to linkedin page" />
          </Link>
        </div>
        <a
          href={cv}
          download="Andria Moore resume"
          className="p-2 mt-2 bg-tertiaryOne max-w-[170px] rounded-lg font-inter text-primary font-black text-base mb-6 text-center max-h-10"
        >
          Resume
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
      className={`flex flex-col items-center justify-evenly px-8 py-5 text-center text-white rounded
       bg-tertiaryTwo font-inter min-h-96 shadow-2xl `}
    >
      <img src={reviewStars} alt="five stars" className="h-8" />
      <p className="max-w-screen-sm text-sm font-semibold">{props.review}</p>
      <p className="text-xs font-semibold ">{props.reviewAuthor}</p>
    </div>
  );
}

function CustomerReviews() {
  const reviewArray = [
    {
      review:
        "I am so glad that I went to Andria for help with my flyer/poster for my " +
        "up-incoming business. Andria made me my advertisement in a quick and speedy manor, " +
        "while also making the product look amazing. She asked for feedback on how I felt on the poster, " +
        "and when I gave her feedback, she fixed it immediately. Great customer service, great product, overall 10/10. ",
      author: "-Tyler Geiger",
    },
    {
      review:
        "As an Internship manager, I was impressed by her work ethic, marketing " +
        "designs, innovative book designs, logos, and managerial skills. She is a " +
        "hard-working young lady with a great sense of humor and commitment to " +
        "her duty. She was always ready to go the extra mile to provide " +
        "high-quality customer service. ",
      author: "-Aldin Beslagic",
    },
    {
      review:
        "Andria has absolutely great customer service! She was kind, patient and responded in ample time. " +
        "She did an amazing job on making a logo for my new business! " +
        "She really impressed me with her ability to send multiple designs in such a quick manner! " +
        "I will definitely be reaching out soon for more of my graphic design needs :)",
      author: "-Cheyenne Frieze",
    },
    {
      review:
        "I reached out to Andria after seeing some of the different ads and book covers that she completed on her Instagram page." +
        "I had no idea where to even start with trying to advertise my business. She created a TON of different logo designs, business cards," +
        "and more for me to choose from. I was also able to change specific things and she was great about any changes I wanted to make!!" +
        "I look forward to using her for ALL my graphic design needs!",
      author: "-Rachael Berg",
    },
    // {
    //   review:
    //     "As an Internship manager, I was impressed by her work ethic, marketing " +
    //     "designs, innovative book designs, logos, and managerial skills. She is a " +
    //     "hard-working young lady with a great sense of humor and commitment to " +
    //     "her duty. She was always ready to go the extra mile to provide " +
    //     "high-quality customer service. ",
    //   author: "-Aldin Beslagic",
    // },
  ];

  return (
    <section className="pt-8 pb-12 mx-auto ">
      <h1 className="mb-4 text-2xl font-extrabold text-center text-white font-inter">
        My Reviews
      </h1>
      <Carousel className="w-full pb-2 mx-auto max-w-[350px] md:max-w-screen-lg">
        <CarouselContent className="-ml-1 ">
          {reviewArray.map((review, index) => (
            <CarouselItem key={index} className="pl-1 ">
              <CustomerReviewCard
                review={review.review}
                reviewAuthor={review.author}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/*
     


          <CarouselItem className="basis-full">
            <CustomerReviewCard
              review="Andria has absolutely great customer service! She was kind, patient and responded in ample time.  
              She did an amazing job on making a logo for my new business! 
              She really impressed me with her ability to send multiple designs in such a quick manner! 
              I will definitely be reaching out soon for more of my graphic design needs:)"
              reviewAuthor="-Cheyenne Frieze"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
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
