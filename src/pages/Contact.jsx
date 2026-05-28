import "../css/Contact.css";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "254796471899";

    const text = `Hello Azizi Spa 🌿

I would like to book an appointment.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Treatment Request:
${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      <div className="floating-glow glow-1"></div>
      <div className="floating-glow glow-2"></div>

      {/* HERO */}
      <section className="contact-hero">
        <span>Luxury Wellness</span>

        <h1>
          Book Your
          <br />
          Spa Escape
        </h1>

        <p>
          Step into a world of relaxation,
          rejuvenation and luxury wellness.
          Let Azizi Spa create your perfect
          self-care experience.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="info-card">
            <div className="icon-wrap">
              <FaPhoneAlt />
            </div>

            <h3>Call Us</h3>
            <p>+254 796 471 899</p>
          </div>

          <div className="info-card">
<div className="icon-wrap">
  <a
    href="https://wa.me/254796471899"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp />
  </a>
</div>

            <h3>WhatsApp</h3>
          </div>

          <div className="info-card">
            <div className="icon-wrap">
              <FaMapMarkerAlt />
            </div>

            <h3>Visit Us</h3>
            <p>Westlands Metropolitan Estate, Chiromo</p>
          </div>

          <div className="info-card">
            <div className="icon-wrap">
              <FaClock />
            </div>

            <h3>Opening Hours</h3>
            <p>Mon - Sun: 9AM - 8PM</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">

          <span className="booking-tag">
            Book Appointment
          </span>

          <h2>Your Wellness Journey Starts Here</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us your preferred treatment..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Booking Request
            </button>

          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">

        <div className="map-header">
          <span>Visit Azizi Spa</span>

          <h2>Find Us Easily</h2>

          <p className="map-text">
            Located in the heart of Westlands,
            Azizi Spa offers a peaceful sanctuary
            designed for relaxation and rejuvenation.
          </p>
        </div>

<iframe
  title="Azizi Spa Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.835653687359!2d36.8062184!3d-1.2716661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17145cf0c00b%3A0xc6cef0b24af1ce08!2sAzizi%20Spa!5e0!3m2!1sen!2ske!4v1779901602041!5m2!1sen!2ske"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </section>
    </div>
  );
}

export default Contact;