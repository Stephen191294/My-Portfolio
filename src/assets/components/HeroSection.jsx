import avatar from "../images/Group1(3).png";

export default function HeroSection() {
  return (
    <div
      id="About"
      className="flex flex-col pt-40  md:flex-col lg:flex-col justify-center items-center  wow animate__animated animate__fadeInLeft  wow"
    >
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
        <div className="w-80 transition-transform duration-300  cursor-pointer ml-10">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="pt-10 flex flex-col items-center justify-center text-center">
          <h1 className="dark:text-gray-100 text-xl typewriter sm:text-4xl md:text-4xl">
            Hello, I'm <span className=" hero-span ">Stephen Sullivan</span>
            <span className="text-gray-400 typewriter sm:text-2xl block">
              Front-end developer
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 mt-5 items-center">
            <a
              className="btn btn-wide bg-dark-900 text-white border-green-light transition-transform duration-300 hover:animate-pulse hover:text-green-light"
              aria-label="Download CV"
              href="/resume.pdf"
              download="resume.pdf"
            >
              Download CV
            </a>

            <a
              className="btn btn-wide bg-dark-900 text-white border-green-light transition-transform duration-300 hover:animate-pulse hover:text-green-light"
              aria-label="Contact Me"
              href="mailto:sullivanstephen57@yahoo.com"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
