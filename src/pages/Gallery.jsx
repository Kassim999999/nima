import "../css/Gallery.css";
import Nima1 from "../assets/Nima1.png";
import Nima2 from "../assets/Nima2.png";
import Nima3 from "../assets/Nima3.png";
import Nima4 from "../assets/Nima4.png";
import Nima6 from "../assets/Nima6.png";
import Nima11 from "../assets/Nima11.png";

function Gallery() {

const images = [
  Nima1,
  Nima2,
  Nima3,
  Nima4,
  Nima6,
  Nima11,
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