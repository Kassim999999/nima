import "../css/Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">
            Welcome to Aurora Spa
          </span>

          <h1>
            Relax, Refresh <br />
            and Rejuvenate
          </h1>

          <p>
            Experience premium massage therapy,
            luxurious spa treatments and total
            wellness in a calming environment.
          </p>

          <div className="hero-buttons">
            <button className="book-now">
              Book Appointment
            </button>

            <button className="explore-btn">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;