import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSpa, FaLeaf, FaMagic } from "react-icons/fa";
import HeroImg from "../assets/Nima8.png"
import WhyImg from "../assets/Nima10.png"

function Home() {
    const navigate = useNavigate();

const testimonials = [
  {
    name: "Swhendhy Cantave",
    review:
      "I had such a great experience celebrating my birthday at Nima Spa. I received a warm welcome, enjoyed a complimentary glass of wine, played my own music, and the massage was excellent. I will definitely be returning.",
  },
  {
    name: "Bivon Obaga",
    review:
      "The Moroccan bath was absolutely refreshing and rejuvenating. My skin felt so soft and clean afterwards, and the whole experience was both relaxing and revitalizing. Definitely a must-try.",
  },
  {
    name: "Duncan Jared",
    review:
      "The services are truly exceptional. I really enjoyed my time there and will definitely keep coming back for more treatments and relaxation.",
  },
  {
    name: "George Ngethe",
    review:
      "Had the most relaxing experience at Nima Spa. The ambiance was peaceful, the staff were amazing, and the massage left me feeling refreshed and stress-free. Highly recommended.",
  },
  {
    name: "Cate Wangari",
    review:
      "The package with scrub and steam was absolutely worth it. My skin and body felt amazing afterwards. Nima Spa truly delivers an outstanding experience.",
  },
  {
    name: "Rachael Akoth",
    review:
      "Wonderful spa experience. The atmosphere is calm and welcoming, and the massage left me completely relaxed. Highly recommend to anyone looking to unwind.",
  },
  {
    name: "Frank Maina",
    review:
      "Nima Spa exceeded my expectations. The therapists are highly skilled and the environment is peaceful and luxurious. Truly one of the best spa experiences in Nairobi.",
  },
  {
    name: "Agnes Maina",
    review:
      "Amazing service from the moment I walked in. I felt relaxed and pampered throughout my visit. The therapist was professional and attentive. Highly recommended.",
  },
  {
    name: "Jackson Travis",
    review:
      "I was blown away by the exceptional service. The therapists were skilled and attentive, and I left feeling completely relaxed and rejuvenated. I'll definitely be back.",
  },
  {
    name: "Pauline Gathoni",
    review:
      "The best decision I made this week was visiting Nima Spa. The massage was deeply relaxing and the atmosphere was incredibly soothing.",
  },
  {
    name: "Mark Maina",
    review:
      "Nima Spa is so relaxing. The staff are wonderful and the therapist was highly skilled. I felt brand new after my skincare treatment. A perfect five-star experience.",
  },
  {
    name: "Jackie The Queen",
    review:
      "Absolutely amazing experience. The massage was perfect, the therapists were professional, and I left feeling completely relaxed. Special thanks to Ann for making it memorable.",
  },
  {
    name: "Rose Mwangi",
    review:
      "Professional, clean, and very relaxing. My back has never felt this good. I highly recommend the full body massage.",
  },
  {
    name: "Eliud Wainaina",
    review:
      "Nima Spa is the ultimate place to unwind. The massage was incredibly relaxing and the staff were friendly, welcoming, and professional.",
  },
  {
    name: "Abigael Kendi",
    review:
      "Excellent spa with very professional therapists. The atmosphere is calm and soothing, making it the perfect place to relax and recharge.",
  },
  {
    name: "Alexandra Selesa",
    review:
      "Such an amazing spot. Great service, professional staff, and the complimentary drink with the couples massage was a wonderful surprise.",
  },
  {
    name: "Leonard Njau",
    review:
      "I booked the full package and it was worth every shilling. The steam and scrub treatments were fantastic, and the entire experience was luxurious.",
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
    <h4>Ksh 5,000</h4>
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
    <span>Why Choose Nima</span>

    <h2>
      A Luxury Wellness
      Experience Like No Other
    </h2>

    <p>
      At Nima Spa, we combine expert care,
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
      src={WhyImg}
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
  Let Nima Spa help you unwind,
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