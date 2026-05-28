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
          <h2>Azizi Spa</h2>
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
          <p>Metropolitan estate, Prof David Wasawo Dr, Nairobi</p>
          <p>+254 796 471 899</p>
          <p>info@azizispa.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Azizi Spa. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;