import reviewStars from "./assets/reviewStars.svg";
import reviewCirlce from "./assets/reviewCircles.svg";
import { useState } from "react";

function Banner() {
  // return <img src={""} alt="" />;
  return <div className="h-40"></div>;
}

function AboutMe() {
  return (
    <section className="text-center p-8 bg-[#6B705C] text-white relative">
      <h1 className="mb-4 text-base font-normal font-koulen">A BIT ABOUT ME</h1>
      <p className="mb-6 text-sm font-normal font-manjari">
        Hi! I'm Andria, a creative Graphic Designer with a talent for developing
        unique custom artwork. I have an innovative approach to ideas and
        concept development. I enjoy all areas of design; however, I specialize
        in brand identity, package design, photo manipulation, as well as
        digital and print advertisements. My mission is to inspire other
        companies and help them meet their goals and expectations to succeed in
        the business.
      </p>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-about"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function WhyWorkWithMe() {
  return (
    <section className="relative p-4 bg-tertiaryOne">
      <h1 className="mb-4 text-base font-bold text-center font-koulen text-[#6B705C]">
        WHY YOU SHOULD WORK WITH ME
      </h1>
      <div className="grid grid-flow-col gap-4 mb-6">
        <div>
          <h2 className="text-2xl text-black font-manjari">01.</h2>
          <p className="text-xs text-black font-manjari">
            Having a memorable brand is the most important aspect of a company.
            I have the skills to take your company to the next level.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-black font-manjari">02.</h2>
          <p className="text-xs text-black font-manjari">
            My mission is to help businesses create a captivating brand through
            the power of storytelling.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-black font-manjari">03.</h2>
          <p className="text-xs text-black font-manjari">
            With my skills I can bring your brand to life with a consistent
            brand design across all social platforms.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-black font-manjari">04.</h2>
          <p className="text-xs text-black font-manjari">
            Communication is the key to portraying the message that you want
            your business to send to. Let's chat and get your business on the
            track to success.
          </p>
        </div>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-why"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative grid grid-cols-2 gap-4 p-4 text-center bg-white justify-items-center">
      <h1 className="col-span-2 mb-2 text-base font-koulen">My Services</h1>
      <div className="h-40 w-40 bg-[#6B705CD6] flex items-center justify-center">
        <p className="text-base font-normal text-white font-koulen">BRANDING</p>
      </div>
      <div className="h-40 w-40 bg-[#6B705CD6] flex items-center justify-center">
        <p className="text-base font-normal text-white font-koulen">
          PHOTO MANIPULATION
        </p>
      </div>
      <div className="h-40 w-40 bg-[#6B705CD6] flex items-center justify-center">
        <p className="text-base font-normal text-white font-koulen">
          WEB DESIGN
        </p>
      </div>
      <div className="mb-8 h-40 w-40 bg-[#6B705CD6] flex items-center justify-center">
        <p className="text-base font-normal text-white font-koulen">
          ADVERTISEMENTS
        </p>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-customers"
          ></path>
        </svg>
      </div>
    </section>
  );
}

type CustomerReviewCardProps = {
  review: string;
  reviewAuthor: string;
};

function CustomerReviewCard(props: CustomerReviewCardProps) {
  return (
    <div className="bg-[#6B705C] text-center text-xs font-manjari rounded px-2 text-white font-normal min-h-48 flex items-center flex-col justify-center">
      <img src={reviewStars} alt="" className="mx-auto mb-2" />
      <p className="mb-2">{props.review}</p>
      <p>{props.reviewAuthor}</p>
    </div>
  );
}

function CustomerReviews() {
  const [swapReview, setSwapReview] = useState(0);
  function showCard() {
    switch (swapReview) {
      case 0:
        return (
          <CustomerReviewCard
            review="As an Internship manager, I was impressed by her work ethic, marketing
        designs, innovative book designs, logos, and managerial skills. She is a
        hard-working young lady with a great sense of humor and commitment to
        her duty. She was always ready to go the extra mile to provide
        high-quality customer service."
            reviewAuthor="-Aldin Beslagic"
          />
        );
      case 1:
        return (
          <CustomerReviewCard
            review="I reached out to Andria after seeing some of the different ads and book covers that she
             completed on her Instagram page. I had no idea where to even start with trying to advertise my business. 
             She created a TON of different logo designs, business cards, and more for me to choose from. 
             I was also able to change specific things and she was great about any changes I wanted to make!! 
             I look forward to using her for ALL my graphic design needs!"
            reviewAuthor="-Rachael Berg"
          />
        );
      case 2:
        return (
          <CustomerReviewCard
            review="I am so glad that I went to Andria for help with my flyer/poster for my
        up-incoming business. Andria made me my advertisement in a quick and speedy manor, 
        while also making the product look amazing. She asked for feedback on how I felt on the poster, 
        and when I gave her feedback, she fixed it immediately. Great customer service, great product, overall 10/10."
            reviewAuthor="-Tyler Geiger"
          />
        );
    }
  }

  return (
    <section className="p-4 bg-secondary">
      <h1 className="text-[#6B705C] text-center mb-4 font-koulen text-base">
        WHAT MY CUSTOMERS SAY
      </h1>
      {showCard()}
      <div className="flex items-center justify-center gap-2 mt-4">
        <img src={reviewCirlce} alt="" onClick={() => setSwapReview(0)} />
        <img src={reviewCirlce} alt="" onClick={() => setSwapReview(1)} />
        <img src={reviewCirlce} alt="" onClick={() => setSwapReview(2)} />
      </div>
    </section>
  );
}

function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <WhyWorkWithMe />
      <Services />
      <CustomerReviews />
    </div>
  );
}

export default Home;
