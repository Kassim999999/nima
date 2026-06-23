import "../css/About.css";
import { useNavigate } from "react-router-dom";
import { FaSpa, FaLeaf, FaMagic } from "react-icons/fa";

function About() {

  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-overlay">

          <span>Luxury Wellness</span>

          <h1>
            Where Serenity
            Meets Luxury
          </h1>

          <p>
            At Nima Spa, we create moments of calm,
            restoration and indulgence through
            expertly curated wellness experiences
            designed to help you reconnect with
            yourself.
          </p>

        </div>

      </section>

      {/* STORY SECTION */}

      <section className="story-section">

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200"
            alt="Azizi Spa"
          />

        </div>

        <div className="story-content">

          <span>Our Story</span>

          <h2>
            Wellness Designed
            Around You
          </h2>

          <p>
            Nima Spa was created as a peaceful
            escape from the fast pace of everyday
            life — a sanctuary where relaxation,
            beauty and wellness come together in
            harmony.
          </p>

          <p>
            From therapeutic massages and
            rejuvenating facials to luxurious body
            treatments, every experience is
            carefully crafted to leave you feeling
            refreshed, renewed and completely
            cared for.
          </p>

          <button
            onClick={() => navigate("/contact")}
          >
            Book Appointment
          </button>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stat-card">

          <h2>500+</h2>

          <p>
            Happy Clients
          </p>

        </div>

        <div className="stat-card">

          <h2>10+</h2>

          <p>
            Expert Therapists
          </p>

        </div>

        <div className="stat-card">

          <h2>15+</h2>

          <p>
            Luxury Treatments
          </p>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why-about">

        <div className="why-header">

          <span>Why Choose Nima</span>

          <h2>
            Premium Wellness
            Experiences
          </h2>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              <FaMagic />
            </div>

            <h3>
              Luxury Experience
            </h3>

            <p>
              Elegant spaces designed to deliver
              calmness, comfort and indulgence.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
             <FaSpa />
            </div>

            <h3>
              Expert Therapists
            </h3>

            <p>
              Skilled professionals dedicated to
              personalized wellness and care.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              <FaLeaf />
            </div>

            <h3>
              Peaceful Environment
            </h3>

            <p>
              A calming atmosphere designed to
              help you relax, recharge and feel
              renewed.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <span>Luxury Self Care</span>

        <h2>
          Ready To Relax?
        </h2>

        <p>
          Experience premium wellness treatments
          tailored to restore your body, mind and
          spirit.
        </p>

        <button
          onClick={() => navigate("/contact")}
        >
          Book Your Appointment
        </button>

      </section>

    </div>
  );
}

export default About;