import "../css/Gallery.css";

function Gallery() {

  const images = [
     "/src/assets/Nima1.png",
  "/src/assets/Nima2.png",
  "/src/assets/Nima3.png",
  "/src/assets/Nima4.png",
  "/src/assets/Nima6.png",
  "/src/assets/Nima11.png",
  ];

  return (
    <div className="gallery-page">

      <div className="gallery-hero">
        <span>Luxury Ambience</span>

        <h1>Inside Nima Spa</h1>

        <p>
          Step into a sanctuary of calm,
          luxury and complete rejuvenation.
        </p>
      </div>

      <section className="gallery-grid">

        {images.map((image, index) => (
          <div
            className="gallery-card"
            key={index}
            data-aos="zoom-in"
          >
            <img src={image} alt="Spa" />
          </div>
        ))}

      </section>

    </div>
  );
}

export default Gallery;