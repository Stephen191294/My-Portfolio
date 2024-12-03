export default function ProjectsSection() {
  const projectImages = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

  return (
    <section>
      <h4 className="text-center mt-10 text-2xl">Projects</h4>
      <div className="carousel p-10 wow animate__animated animate__fadeInLeft">
        {projectImages.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
