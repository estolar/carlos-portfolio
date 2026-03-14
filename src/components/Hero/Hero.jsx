import profileData from "../../data/profileData";
import "./Hero.css";
import profileImg from "../../assets/carlos.jpg";

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__grid">
        <div className="hero__image-wrapper">
          <img src={profileImg} alt="Carlos Palomino" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Professional Portfolio</p>
          <h1>{profileData.name}</h1>
          <h2>{profileData.role}</h2>
          <p className="hero__description">{profileData.description}</p>

          <div className="hero__actions">
            <a href="#timeline" className="btn btn--primary">
              {profileData.ctaPrimary}
            </a>
            <a href="#contact" className="btn btn--secondary">
              {profileData.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;