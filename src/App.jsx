import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <a
        href="https://wa.me/254758974254?text=Hello%20Nima%20Spa%20🌿%20I%20would%20like%20to%20make%20an%20inquiry."
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        <span className="whatsapp-tooltip">
          Ready to book an appointment?
        </span>

        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>

      <Footer />
    </>
  );
}

export default App;