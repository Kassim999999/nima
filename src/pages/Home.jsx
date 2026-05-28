import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSpa, FaLeaf, FaMagic } from "react-icons/fa";

function Home() {
    const navigate = useNavigate();

 const testimonials = [
  {
    name: "Chris Muriuki",
    review:
      "I recently visited Azizi Spa and was genuinely impressed. From the peaceful atmosphere to the warm welcome and personalized massage, everything exceeded my expectations.",
  },
  {
    name: "Kennedy Indasi",
    review:
      "Absolutely wonderful experience. The ambiance was serene, beautifully designed, and the staff were warm and professional from the moment I arrived.",
  },
  {
    name: "Bryan Mwaura",
    review:
      "I loved everything about the experience. I left feeling revitalised and ready for the new week. Privacy is guaranteed and the massage was incredibly relaxing.",
  },
  {
    name: "Francis Njau",
    review:
      "Azizi Spa is a true hidden gem! The ambiance is calming, the staff are incredibly professional and kind, and I left feeling refreshed and pampered.",
  },
  {
    name: "Mark Mutuse",
    review:
      "Such a relaxing experience. The staff were kind, the spa was very clean, and the massage made me feel refreshed. Definitely coming back again.",
  },
  {
    name: "Gracia Njoroge",
    review:
      "Wonderful experience at Azizi Spa. The staff were welcoming and professional, and the relaxing atmosphere left me feeling rejuvenated.",
  },
  {
    name: "Cynthia Akasiba",
    review:
      "A wonderfully relaxing experience. The massage eased away all my tension and the peaceful atmosphere made the visit feel truly luxurious.",
  },
  {
    name: "Ronald Einstein",
    review:
      "Peaceful ambience, incredibly friendly staff, and rejuvenating treatments. The little details like soothing music made the experience memorable.",
  },
  {
    name: "Eglah",
    review:
      "I had the best body scrub, steam and massage. The ambience was simply amazing 👌",
  },
  {
    name: "Tarek Essam",
    review:
      "A genuine place with a genuine professional owner and talented therapists with magical hands. Highly recommended.",
  },
  {
    name: "Mary Njeri",
    review:
      "Very professional service in a peaceful and tranquil environment. The décor, treatments, and friendly staff make every visit luxurious.",
  },
  {
    name: "Eric Mugambi Njilu",
    review:
      "The team at Azizi Spa exhibits ultimate professionalism and goes the extra mile to make you feel valued. Highly recommended.",
  },
];

  const [currentReview, setCurrentReview] =
  useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentReview((prev) =>
      (prev + 1) % testimonials.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content" data-aos="fade-up">
            <span className="hero-tag">
  Luxury Wellness • Nairobi
</span>

<h1>
  Rejuvenate Your Body.
  <br />
  Relax Your Mind.
</h1>

<p>
  Experience premium massage therapy,
  wellness treatments and luxury
  relaxation tailored to help you
  unwind, refresh and reconnect.
</p>

            <div className="hero-buttons">
<button
  className="book-now"
  onClick={() => navigate("/contact")}
>
  Book Appointment
</button>

<button
  className="explore-btn"
  onClick={() => navigate("/services")}
>
  Explore Services
</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-header" data-aos="fade-up">
          <span>Our Premium Services</span>
          <h2>Relaxation Tailored For You</h2>
          <p>
            Discover our carefully curated wellness
            experiences designed to help you unwind,
            rejuvenate and feel refreshed.
          </p>
        </div>

        <div className="services-grid" data-aos="fade-up">
          <div className="service-card">
  <span className="service-category">
    Massage
  </span>

  <h3>Swedish Massage</h3>

  <p>
    Relaxing full body massage
    therapy designed to ease stress.
  </p>

  <div className="service-bottom">
    <h4>Ksh 4,000</h4>
    <span>60 min</span>
  </div>
</div>

<div className="service-card featured-service">
  <span className="popular-tag">
    Most Popular
  </span>

  <span className="service-category">
    Therapy
  </span>

  <h3>Deep Tissue Massage</h3>

  <p>
    Perfect for muscle recovery,
    tension relief and relaxation.
  </p>

  <div className="service-bottom">
    <h4>Ksh 5,000</h4>
    <span>60 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Wellness
  </span>

  <h3>Aromatherapy</h3>

  <p>
    Relax deeply with calming
    essential oils and scents.
  </p>

  <div className="service-bottom">
    <h4>Ksh 5,000</h4>
    <span>60 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Luxury
  </span>

  <h3>Hot Stone Massage</h3>

  <p>
    Luxury heated stone therapy
    to release deep tension.
  </p>

  <div className="service-bottom">
    <h4>Ksh 6,000</h4>
    <span>90 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Skincare
  </span>

  <h3>Facial Treatment</h3>

  <p>
    Glow-enhancing facial therapy
    for refreshed healthy skin.
  </p>

  <div className="service-bottom">
    <h4>Ksh 3,000</h4>
    <span>45 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Signature
  </span>

  <h3>Moroccan Bath</h3>

  <p>
    A premium cleansing ritual
    for deep relaxation.
  </p>

  <div className="service-bottom">
    <h4>Ksh 10,000</h4>
    <span>90 min</span>
  </div>
</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

<section className="why-section"  data-aos="fade-right">
  <div className="why-left">
    <span>Why Choose Aurora</span>

    <h2>
      A Luxury Wellness
      Experience Like No Other
    </h2>

    <p>
      At Aurora Spa, we combine expert care,
      calming environments and premium
      treatments to help you fully relax
      and rejuvenate.
    </p>

<div className="features">

  <div className="feature-box">
    <div className="feature-icon">
      <FaSpa />
    </div>

    <div>
      <h3>Expert Therapists</h3>
      <p>
        Skilled wellness specialists
        delivering personalized care.
      </p>
    </div>
  </div>

  <div className="feature-box">
    <div className="feature-icon">
      <FaLeaf />
    </div>

    <div>
      <h3>Relaxing Atmosphere</h3>
      <p>
        A peaceful luxury environment
        designed for total relaxation.
      </p>
    </div>
  </div>

  <div className="feature-box">
    <div className="feature-icon">
      <FaMagic />
    </div>

    <div>
      <h3>Premium Treatments</h3>
      <p>
        Tailored wellness experiences
        to restore body and mind.
      </p>
    </div>
  </div>

</div>
  </div>

  <div className="why-right">
    <img
      src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900"
      alt="Spa"
    />
  </div>
</section>

{/* TESTIMONIALS */}

<section
  className="testimonial-section"
  data-aos="fade-up"
>

  <div className="section-header">
    <span>Testimonials</span>
    <h2>What Our Clients Say</h2>
  </div>

  <div className="testimonial-slider">

    <div className="testimonial-card">
      <p>
        “{
          testimonials[currentReview]
            .review
        }”
      </p>

      <h4>
        —
        {
          testimonials[currentReview]
            .name
        }
      </h4>
    </div>

    <div className="testimonial-dots">
      {testimonials.map((_, index) => (
        <span
          key={index}
          className={
            currentReview === index
              ? "dot active-dot"
              : "dot"
          }
          onClick={() =>
            setCurrentReview(index)
          }
        />
      ))}
    </div>

  </div>
</section>

{/* CTA SECTION */}

<section className="cta-section" data-aos="zoom-in">
  <div className="cta-content">
    <span>Escape The Stress</span>

<h2>
  Your Mind & Body
  Deserve A Reset
</h2>

<p>
  Step into a world of calm,
  relaxation and luxury wellness.
  Let Aurora Spa help you unwind,
  recharge and feel renewed.
</p>

<button
  className="cta-btn"
  onClick={() => navigate("/contact")}
>
  Book Appointment
</button>
  </div>
</section>

{/* TRUST STRIP */}
{/* 
<section className="trust-strip">

  <div className="trust-item">
    <h2>74+</h2>
    <p>Happy Clients</p>
  </div>

  <div className="trust-item">
    <h2>4.9★</h2>
    <p>Google Rating</p>
  </div>

  <div className="trust-item">
    <h2>100%</h2>
    <p>Relaxation Focused</p>
  </div>

  <div className="trust-item">
    <h2>Luxury</h2>
    <p>Wellness Experience</p>
  </div>

</section> */}
    </>
  );
}

export default Home;