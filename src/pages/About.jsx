import "../css/About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <span>About Aurora Spa</span>

        <h1>
          Where Relaxation
          Begins
        </h1>

        <p>
          Aurora Spa is a sanctuary of wellness,
          beauty and rejuvenation designed to
          help you relax, refresh and reconnect
          with yourself.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="story-section">

        <div
          className="story-image"
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900"
            alt="Spa"
          />
        </div>

        <div
          className="story-content"
          data-aos="fade-left"
        >
          <span>Our Story</span>

          <h2>
            Luxury Wellness
            Tailored For You
          </h2>

          <p>
            At Aurora Spa, we believe self-care
            is not a luxury — it is essential.
            Our mission is to provide a peaceful
            and rejuvenating environment where
            every client feels refreshed,
            renewed and cared for.
          </p>

          <p>
            From massage therapy and facials
            to luxurious body treatments,
            we focus on delivering premium
            wellness experiences with expert care.
          </p>
        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Professional Therapists</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Luxury Treatments</p>
        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="why-about">

        <div className="why-card">
          <h3>Premium Experience</h3>
          <p>
            Luxury treatments in a calming
            environment designed for comfort.
          </p>
        </div>

        <div className="why-card">
          <h3>Expert Care</h3>
          <p>
            Skilled therapists focused on
            personalized wellness experiences.
          </p>
        </div>

        <div className="why-card">
          <h3>Trusted By Clients</h3>
          <p>
            Loved by clients seeking relaxation,
            beauty and self-care.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;