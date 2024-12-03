import React from "react";
import SkillCard from "./skillcard";

export default function Main() {
  return (
    <section className=" h-70 pb-10 ">
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
      <div className=" relative">
        <img src="src\assets\images\blob-haikei (2).png" alt="" />
        <img
          className="w-[150px] h-auto absolute z-10 bottom-[31px] right-[87px] clip-path-custom rounded-full object-cover "
          src="src\assets\images\game-removebg-preview(2).png"
          alt="photo"
        />
      </div>
      <h2 className="text-2xl text-center pt-5">About Me</h2>
      <p className="text-center p-5">
        I'm a passionate, self-proclaimed designer who specializes in full stack
        development (React.js & Node.js). I am very enthusiastic about bringing
        the technical and visual aspects of digital products to life. User
        experience, pixel perfect design, and writing clear, readable, highly
        performant code matters to me.
      </p>
      <div className="pt-7">
        <h3 className="text-center text-2xl">Skills</h3>
        <p className="text-center">Technologies that I'm really good at</p>
      </div>
      <div className="container mx-auto flex items-center justify-center mt-10 wow animate__animated animate__fadeIn">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { iconClass: "fa-brands fa-js", skillName: "JavaScript" },
            { iconClass: "fa-brands fa-react", skillName: "React" },
            { iconClass: "fa-brands fa-sass", skillName: "SASS" },
            { iconClass: "fa-brands fa-git-alt", skillName: "Git" },
            { iconClass: "fa-brands fa-figma", skillName: "Figma" },
            { iconClass: "fa-brands fa-bootstrap", skillName: "Bootstrap" },
            { iconClass: "fa-brands fa-html5", skillName: "HTML 5" },
            { iconClass: "fa-brands fa-css3-alt", skillName: "CSS3" },
          ].map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-center mt-10 text-2xl">Projects</h4>
      </div>
      <div className="carousel  p-10">
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger"
          />
        </div>
      </div>
      <div>
        <h5 className="text-2xl text-center">Contacts</h5>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center">
        <i class="fa-regular fa-envelope text-green-900 fa-3x"></i>
        <span>E-mail</span>
        <span>sullivanstephen57@yahoo.com</span>
        </div>
        <div className="flex flex-col justify-center items-center">
        <i class="fa-solid fa-phone  text-green-900 fa-3x"></i>
        <span>Telephone</span>
        <span>(71)98639-3059</span>
        </div>
        <div className="flex flex-col justify-center items-center">
        <i class="fa-brands fa-linkedin  text-green-900 fa-3x"></i>
        <span>Linkedin</span>
        <span>www.linkedin.com/in/stephen-sullivan-4ab85aa1</span>
        </div>
        <div className="flex flex-col justify-center items-center">
        <i class="fa-brands fa-github  text-green-900 fa-3x"></i>
        <span>Github</span>
        <span>https://github.com/Stephen191294</span>
        </div>
      </div>
    </section>
  );
}
