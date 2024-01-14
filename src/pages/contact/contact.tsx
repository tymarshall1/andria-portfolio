function Contact() {
  return (
    <div className="p-4 bg-[#6B705CCC] min-h-svh">
      <h1 className="my-6 text-5xl font-normal text-center text-white font-alexBrush">
        Get in Touch
      </h1>
      <form
        className="flex flex-col gap-4 p-6 mb-6 text-white border-4 border-white"
        action=" "
      >
        <div>
          <label htmlFor="name" className="text-xl font-normal font-manjari">
            Name
          </label>
          <input
            className="w-full p-2 placeholder-white placeholder-opacity-25 border-b-2 border-white rounded-none outline-none bg-inherit"
            type="text"
            name="name"
            placeholder="John Doe"
            id="name"
            required={true}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-xl font-normal font-manjari">
            Email
          </label>
          <input
            className="w-full p-2 placeholder-white placeholder-opacity-25 border-b-2 border-white rounded-none outline-none bg-inherit"
            type="email"
            name="email"
            placeholder="John@example.com"
            id="email"
            required={true}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-xl font-normal font-manjari">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-2 text-black h-28 font-manjari"
            required={true}
          ></textarea>
        </div>

        <button type="submit" className="p-2 text-black bg-white">
          Submit
        </button>
      </form>

      <div>
        <h1 className="text-5xl font-normal text-center text-white font-alexBrush">
          Follow Me
        </h1>
        <div className="flex items-center justify-center gap-4">
          social icons
        </div>
      </div>
    </div>
  );
}

export default Contact;
