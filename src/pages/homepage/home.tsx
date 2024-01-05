function Banner() {
  return <img src={""} alt="" />;
}

function AboutMe() {
  return (
    <section className="text-center p-8 bg-[#6B705C] text-white relative">
      <h1 className="text-base mb-2 font-koulen font-normal">A BIT ABOUT ME</h1>
      <p className="text-sm mb-6 font-manjari font-normal">
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
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

function WhyWorkWithMe() {
  return (
    <section className="bg-tertiaryOne p-4 text-[#6B705C]">
      <h1 className="text-center font-bold mb-4">
        WHY YOU SHOULD WORK WITH ME
      </h1>
      <div className="grid grid-flow-col gap-4">
        <div>
          <h2 className="font-manjari text-2xl text-black">01.</h2>
          <p className="text-xs font-manjari text-black">
            Having a memorable brand is the most important aspect of a company.
            I have the skills to take your company to the next level.
          </p>
        </div>
        <div>
          <h2 className="font-manjari text-2xl text-black">02.</h2>
          <p className="text-xs font-manjari text-black">
            Having a memorable brand is the most important aspect of a company.
            I have the skills to take your company to the next level.
          </p>
        </div>
        <div>
          <h2 className="font-manjari text-2xl text-black">03.</h2>
          <p className="text-xs font-manjari text-black">
            Having a memorable brand is the most important aspect of a company.
            I have the skills to take your company to the next level.
          </p>
        </div>
        <div>
          <h2 className="font-manjari text-2xl text-black">04.</h2>
          <p className="text-xs font-manjari text-black">
            Having a memorable brand is the most important aspect of a company.
            I have the skills to take your company to the next level.
          </p>
        </div>
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
    </div>
  );
}

export default Home;
