export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center">
      <div className="pt-10 flex flex-col items-center justify-center text-center">
        <h1 className="dark:text-gray-100 text-xl typewriter">
          Hello, I'm <span className="text-green-900">Stephen Sullivan</span>
        </h1>
        <p className="text-gray-400">Front-end developer</p>
        <div className="flex flex-col gap-3 mt-5 items-center">
          <button className="btn btn-wide bg-green-900 text-dark-900">
            Download CV
          </button>
          <button className="btn btn-wide bg-dark-900 text-white border-green-900">
            Contact Me
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="md:w-[540px] h-auto">
          <img src="src/assets/images/blob-haikei (5).png" alt="Background blob" />
        </div>
        <img
          className="w-[150px] h-auto absolute z-10 bottom-[20px] right-[117px] clip-path-custom rounded-full object-cover md:right-[190px] md:bottom-[28px] lg:right-[190px]"
          src="src/assets/images/game-removebg-preview(2).png"
          alt="Profile"
        />
      </div>
    </div>
  );
}
