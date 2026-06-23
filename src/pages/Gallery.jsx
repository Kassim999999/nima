import "../css/Gallery.css";

function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900",
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900",
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