import diamond from "./assets/diamond.svg";
function Contact() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-center gap-4 mb-20">
        <img src={diamond} alt="" className="w-12 h-12" />
        <h1 className="text-6xl font-extrabold text-center text-white font-inter">
          Contact <span className="text-tertiaryOne">Me!</span>
        </h1>
        <img src={diamond} alt="" className="w-12 h-12" />
      </div>
      <form
        action=""
        className="grid items-center max-w-4xl gap-6 mx-auto justify-stretch md:grid-cols-2"
      >
        <label htmlFor="name" className="">
          <input
            className="bg-[#6437A0] rounded font-inter font-extrabold text-2xl p-4 text-white placeholder:text-white w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            className="bg-[#6437A0] rounded font-inter font-extrabold text-2xl text-white p-4 placeholder:text-white w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="message" className="md:col-start-1 md:col-end-3">
          <textarea
            className="bg-[#6437A0] rounded font-inter font-extrabold text-2xl
            p-4 placeholder:text-white text-white w-full min-h-60"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </label>
      </form>
    </div>
  );
}

export default Contact;
