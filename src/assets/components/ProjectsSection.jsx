export default function ProjectsSection() {
  return (
    <section id="Projects" className="h-screen flex flex-col justify-center items-center">
      <h4 className="text-center pt-10 pb-5 text-2xl sm:text-4xl">Projects</h4>

      <div className="carousel w-full ">
        <div id="item1" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs bg-green-light">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-green-light">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-green-light">
          3
        </a>
        <a href="#item4" className="btn btn-xs bg-green-light">
          4
        </a>
      </div>
    </section>
  );
}
