import "../css/Services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-page">

      <div className="services-hero">
        <span>Luxury Treatments</span>
        <h1>Our Spa Services</h1>
        <p>
          Indulge in premium wellness experiences
          crafted to relax, restore and rejuvenate.
        </p>
      </div>

      {/* MASSAGE SECTION */}
      <section className="service-category">
        <h2>Massage Therapy</h2>

        <div className="service-list">

          <div className="service-item">
            <div>
              <h3>Swedish Massage</h3>
              <p>60 mins relaxation therapy</p>
            </div>

            <div className="service-right">
              <h4>Ksh 4,000</h4>
              <button onClick={() => navigate("/contact")}>
                Book
              </button>
            </div>
          </div>

          <div className="service-item">
            <div>
              <h3>Deep Tissue Massage</h3>
              <p>Muscle tension relief</p>
            </div>

            <div className="service-right">
              <h4>Ksh 5,000</h4>
              <button onClick={() => navigate("/contact")}>
                Book
              </button>
            </div>
          </div>

          <div className="service-item">
            <div>
              <h3>Aromatherapy</h3>
              <p>Relaxing essential oils experience</p>
            </div>

            <div className="service-right">
              <h4>Ksh 5,000</h4>
              <button onClick={() => navigate("/contact")}>
                Book
              </button>
            </div>
          </div>

          <div className="service-item">
            <div>
              <h3>Hot Stone Massage</h3>
              <p>Luxury heated stone treatment</p>
            </div>

            <div className="service-right">
              <h4>Ksh 6,000</h4>
              <button onClick={() => navigate("/contact")}>
                Book
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SPA TREATMENTS */}
      <section className="service-category">
        <h2>Spa Treatments</h2>

        <div className="treatments-grid">

          <div className="treatment-card">
            <h3>Facial</h3>
            <p>Ksh 3,000</p>
          </div>

          <div className="treatment-card">
            <h3>Body Scrub/Wrap</h3>
            <p>Ksh 3,000</p>
          </div>

          <div className="treatment-card">
            <h3>Pedicure</h3>
            <p>Ksh 2,000</p>
          </div>

          <div className="treatment-card">
            <h3>Manicure</h3>
            <p>Ksh 1,500</p>
          </div>

          <div className="treatment-card">
            <h3>Armpit Waxing</h3>
            <p>Ksh 2,000</p>
          </div>

          <div className="treatment-card">
            <h3>Bikini Waxing</h3>
            <p>Ksh 3,000</p>
          </div>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="service-category">
        <h2>Premium Packages</h2>

        <div className="package-card">
          <h3>
            Massage + Steambath + Body Scrub
          </h3>

          <h4>Ksh 7,000</h4>

          <button onClick={() => navigate("/contact")}>
            Book Package
          </button>
        </div>

        <div className="package-card">
          <h3>Moroccan Bath</h3>

          <h4>Ksh 10,000</h4>

          <button onClick={() => navigate("/contact")}>
            Book Package
          </button>
        </div>
      </section>

    </div>
  );
}

export default Services;