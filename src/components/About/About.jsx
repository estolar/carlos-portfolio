import aboutData from "../../data/aboutData";
import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">

        <div className="about__image">
          <img src={aboutData.image} alt="Perfil profesional" />
        </div>

        <div className="about__content">
          <p className="section-tag">About</p>

          <h2 className="section-title">
            {aboutData.title}
          </h2>

          <p className="about__description">
            {aboutData.description}
          </p>

          <ul className="about__list">
            {aboutData.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="about__location">
            <strong>Ubicación:</strong> {aboutData.location}
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;