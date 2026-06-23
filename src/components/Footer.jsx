import "../css/Footer.css";
// import logo from "../assets/Aurora.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
            {/* <img
  src={logo}
  alt="Azizi Spa Logo"
  className="footer-logo"
/> */}
          <h2>Nima Spa</h2>
          <p>
            Where relaxation begins.
            Experience luxury wellness
            and premium self-care.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Westlands Brookside drive gate 22, Nairobi</p>
          <p>+254 758 974 254</p>
          <p>info@nimaspa.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Nima Spa. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;