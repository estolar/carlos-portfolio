import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a href="#hero" className="navbar__brand">
          Carlos Palomino
        </a>

        <nav className="navbar__nav">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;