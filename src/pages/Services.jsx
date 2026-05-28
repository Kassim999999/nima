import "../css/Services.css";

function Services() {
  const phone = "254796471899";

  const openWhatsApp = (serviceName, price, duration = "") => {
    const message = `Hi Azizi Spa 👋 I would like to book ${serviceName}${
      duration ? ` (${duration})` : ""
    } for Ksh ${price}. Please let me know availability.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="services-page-container">

      {/* HERO */}
      <div className="services-hero">
        <div className="services-hero-overlay">
          <span>Luxury Wellness</span>
          <h1>Our Signature Treatments</h1>
          <p>
            Indulge in premium wellness experiences
            crafted to relax, restore and rejuvenate
            your body, mind and soul.
          </p>
        </div>
      </div>

      {/* MASSAGE SECTION */}
      <section className="services-category">

        <div className="services-heading">
          <span>Wellness Experiences</span>
          <h2>Massage Therapy</h2>
        </div>

        <div className="services-list">

          <div className="services-item">
            <div>
              <span className="service-tag">Signature Massage</span>
              <h3>Swedish Massage</h3>
              <p>Gentle full-body relaxation designed to reduce stress and restore balance.</p>
            </div>

            <div className="services-right">
              <h4>Ksh 3,000</h4>
              <span>60 Minutes</span>

              <button
                onClick={() =>
                  openWhatsApp("Swedish Massage", "3,000", "60 Minutes")
                }
              >
                Book Experience
              </button>
            </div>
          </div>

          <div className="services-item">
            <div>
              <span className="service-tag">Deep Recovery</span>
              <h3>Deep Tissue Massage</h3>
              <p>Targeted muscle recovery therapy for deep tension and soreness relief.</p>
            </div>

            <div className="services-right">
              <h4>Ksh 4,000</h4>
              <span>60 Minutes</span>

              <button
                onClick={() =>
                  openWhatsApp("Deep Tissue Massage", "4,000", "60 Minutes")
                }
              >
                Book Experience
              </button>
            </div>
          </div>

          <div className="services-item">
            <div>
              <span className="service-tag">Sports Therapy</span>
              <h3>Thai Sports Massage</h3>
              <p>Energizing therapy focused on flexibility, circulation and recovery.</p>
            </div>

            <div className="services-right">
              <h4>Ksh 4,500</h4>
              <span>75 Minutes</span>

              <button
                onClick={() =>
                  openWhatsApp("Thai Sports Massage", "4,500", "75 Minutes")
                }
              >
                Book Experience
              </button>
            </div>
          </div>

          <div className="services-item">
            <div>
              <span className="service-tag">Essential Oils</span>
              <h3>Aromatherapy</h3>
              <p>Calming essential oil treatment designed for deep relaxation.</p>
            </div>

            <div className="services-right">
              <h4>Ksh 5,000</h4>
              <span>90 Minutes</span>

              <button
                onClick={() =>
                  openWhatsApp("Aromatherapy Massage", "5,000", "90 Minutes")
                }
              >
                Book Experience
              </button>
            </div>
          </div>

          <div className="services-item">
            <div>
              <span className="service-tag">Luxury Ritual</span>
              <h3>Hot Stone Massage</h3>
              <p>Heated stone therapy that melts away stress and improves circulation.</p>
            </div>

            <div className="services-right">
              <h4>Ksh 5,000</h4>
              <span>90 Minutes</span>

              <button
                onClick={() =>
                  openWhatsApp("Hot Stone Massage", "5,000", "90 Minutes")
                }
              >
                Book Experience
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SPA TREATMENTS */}
      <section className="services-category">

        <div className="services-heading">
          <span>Luxury Self Care</span>
          <h2>Spa Treatments</h2>
        </div>

        <div className="services-treatments-grid">

          <div className="services-treatment-card">
            <span>Skin Care</span>
            <h3>Luxury Facial</h3>
            <p>Deep cleansing and hydrating facial treatment for glowing skin.</p>
            <h4>Ksh 3,000</h4>
          </div>

          <div className="services-treatment-card">
            <span>Body Therapy</span>
            <h3>Body Scrub & Wrap</h3>
            <p>Full-body exfoliation treatment for smooth radiant skin.</p>
            <h4>Ksh 3,000</h4>
          </div>

          <div className="services-treatment-card">
            <span>Waxing</span>
            <h3>Armpit Waxing</h3>
            <p>Gentle professional waxing treatment with smooth finish.</p>
            <h4>Ksh 2,000</h4>
          </div>

          <div className="services-treatment-card">
            <span>Waxing</span>
            <h3>Bikini Waxing</h3>
            <p>Luxury intimate waxing experience with expert care and comfort.</p>
            <h4>Ksh 3,000</h4>
          </div>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="services-category">

        <div className="services-heading">
          <span>Exclusive Experiences</span>
          <h2>Premium Packages</h2>
        </div>

        <div className="services-package-card">
          <span className="package-tag">Best Seller</span>
          <h3>The Royal Escape</h3>
          <p>Massage + Steam Bath + Luxury Body Scrub</p>
          <h4>Ksh 6,000</h4>

          <button
            onClick={() =>
              openWhatsApp("The Royal Escape Package", "6,000")
            }
          >
            Book Package
          </button>
        </div>

        <div className="services-package-card">
          <span className="package-tag">Signature Ritual</span>
          <h3>Moroccan Royal Ritual</h3>
          <p>Traditional Moroccan bath experience with deep cleansing and relaxation.</p>
          <h4>Ksh 10,000</h4>

          <button
            onClick={() =>
              openWhatsApp("Moroccan Royal Ritual Package", "10,000")
            }
          >
            Book Package
          </button>
        </div>

      </section>

      {/* CTA */}
      <section className="services-cta">
        <span>Luxury Wellness</span>
        <h2>Ready To Relax?</h2>
        <p>
          Let our expert therapists help you restore balance,
          reduce stress and rejuvenate your body and mind.
        </p>

        <button
          onClick={() =>
            openWhatsApp("General Appointment", "N/A")
          }
        >
          Book Your Appointment
        </button>
      </section>

    </div>
  );
}

export default Services;