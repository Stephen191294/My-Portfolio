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
    <header className="w-full">
      <nav
        className="bg-dark-900 h-28 border-b-4 border-green-900 flex p-5"
        role="navigation"
      >
        {/* Sidebar Menu */}
        <ul
          className={`sidebar p-4 flex-col items-start justify-start ${
            isSidebarVisible ? "visible" : ""
          }`}
        >
          <li onClick={hideSidebar}>
            <a href="#">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </li>
          <li className="mt-4">
            <span className="text-green-900">Welcome to my portfolio!</span>
          </li>
          <li className="mt-4 hover:text-green-900">
            <a href="#">About me</a>
          </li>
          <li className="mt-4 hover:text-green-900">
            <a href="#">Skills</a>
          </li>
          <li className="mt-4 hover:text-green-900">
            <a href="#">Projects</a>
          </li>
          <li className="mt-4 hover:text-green-900">
            <a href="#">Contact Me</a>
          </li>
        </ul>

        {/* Main Navigation */}
        <ul className="w-full flex justify-between items-center gap-5 text-green-900">
          <li className="mr-auto">
            <span className="text-3xl">Portfolio</span>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#">About Me</a>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#">Skills</a>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#">Projects</a>
          </li>
          <li className="hidden xl:block lg:block md:block hover:text-gray-100 hideOnMobile">
            <a href="#">Contact Me</a>
          </li>
          <li onClick={showSidebar}>
            <a href="#">
              <i className="fa-solid fa-bars hover:text-gray-100"></i>
            </a>
          </li>
          <li>
            <input
              type="checkbox"
              className="toggle border-green-900 bg-dark-900 hover:bg-dark-900"
              style={{ "--tglbg": theme === "dark" ? "white" : "#b9ff66", }}
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
