import certificationsData from "../../data/certificationsData";
import "./Certifications.css";

function Certifications() {

  return (
    <section id="certifications" className="certifications section">

      <div className="container">

        <p className="section-tag">Certifications</p>

        <h2 className="section-title">
          Certificaciones profesionales
        </h2>

        <div className="certifications__grid">

          {certificationsData.map((item) => (

            <div key={item.id} className="certifications__card card">

              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

              <a href={item.link} target="_blank" rel="noreferrer">
                Ver credencial
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;