import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo">Aurora Spa</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

<button
  className="book-btn"
  onClick={() => navigate("/contact")}
>
  Book Now
</button>
    </nav>
  );
}

export default Navbar;