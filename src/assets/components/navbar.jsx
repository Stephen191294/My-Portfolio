import { useState, useEffect } from "react";

export default function NavBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const hideSidebar = () => {
    setIsSidebarVisible(false);
    console.log("Sidebar hidden");
  };

  const showSidebar = () => {
    setIsSidebarVisible(true);
    console.log("Sidebar shown");
  };

  const savedTheme = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav
        className="bg-dark-900 h-28 border-b-4 border-green-light flex p-10 "
        role="navigation"
      >
        {/* Sidebar Menu */}
        <ul
          className={`sidebar flex-col items-start justify-start ${
            isSidebarVisible ? "visible" : ""
          }`}
        >
          <li className="sm:pl-10" onClick={hideSidebar}>
            <a href="#">
              <i className="fa-solid fa-xmark text-2xl"></i>
            </a>
          </li>
          <li className="mt-4 sm:pl-10">
            <span className="text-green-light sm:text-5xl">Welcome to my portfolio!</span>
          </li>
          <li className="mt-4 hover:text-green-light sm:text-4xl sm:pl-10">
            <a href="#About" onClick={hideSidebar}>About me</a>
          </li>
          <li className="mt-4 hover:text-green-light sm:text-4xl sm:pl-10">
            <a href="#Skills" onClick={hideSidebar}>Skills</a>
          </li>
          <li className="mt-4 hover:text-green-light sm:text-4xl sm:pl-10">
            <a href="#Projects" onClick={hideSidebar}>Projects</a>
          </li>
          <li className="mt-4 hover:text-green-light sm:text-4xl sm:pl-10">
            <a href="#Contacts" onClick={hideSidebar}>Contact Me</a>
          </li>
        </ul>

        {/* Main Navigation */}
        <ul className="w-full flex justify-between items-center gap-5 text-green-light">
          <li className="mr-auto">
            <span className="text-3xl">Portfolio</span>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#About">About Me</a>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#Skills">Skills</a>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#Projects">Projects</a>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#Contacts">Contact Me</a>
          </li>
          <li onClick={showSidebar}>
            <a href="#">
              <i className="fa-solid fa-bars hover:text-gray-100"></i>
            </a>
          </li>
          <li>
            <input
              type="checkbox"
              className="toggle border-green-light bg-dark-900 hover:bg-dark-900"
              style={{ "--tglbg": theme === "dark" ? "#b9ff66" : "white", }}
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
