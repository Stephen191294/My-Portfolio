export default function HeroSection() {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-col lg:flex-row-reverse justify-center items-center h-screen wow animate__animated animate__fadeInLeft  wow"
    >
      <div className="w-60 transition-transform duration-300 hover:animate-pulse cursor-pointer ml-10">
        <img src="./assets/images/Group1(3).png" alt="avatar" />
      </div>
      <div className="pt-10 flex flex-col items-center justify-center text-center">
        <h1 className="dark:text-gray-100 text-xl typewriter sm:text-4xl md:text-4xl">
          Hello, I'm <span className="text-green-900">Stephen Sullivan</span>
          <span className="text-gray-400 typewriter sm:text-2xl block">
            Front-end developer
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 mt-5 items-center">
          <button className="btn btn-wide bg-gradient-to-l from-green-700 via-green-800 to-green-900 text-gray-100 border-none hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-transform duration-300 hover:animate-pulse">
            Download CV
          </button>

          <button className="btn btn-wide bg-dark-900 text-white border-green-900 transition-transform duration-300 hover:animate-pulse">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
