import projectOne from "../images/positivus.png";
import pokebowl from "../images/pokebowls.png";

export default function ProjectsSection() {
  return (
    <section
      id="Projects"
      className="h-screen flex flex-col justify-center items-center  wow animate__animated animate__fadeInLeft"
    >
      <h4 className="text-center pt-10 pb-5 text-2xl sm:text-4xl">Projects</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div>
          <a
            href="https://positivusfrontend.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={projectOne}
              alt="Positivus Project Thumbnail"
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <div className="p-4 bg-green-light">
              <h2 className="text-lg font-semibold text-gray-800">
                Positivus Project
              </h2>
              <p className="text-sm text-gray-600 mt-2 bg">
                Positivus landing page.
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://asianpokebowls.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={pokebowl}
              alt="Positivus Project Thumbnail"
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <div className="p-4 bg-green-light">
              <h2 className="text-lg font-semibold text-gray-800">
                Poke Bowl Project
              </h2>
              <p className="text-sm text-gray-600 mt-2 bg">
                Pokebowl .
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
