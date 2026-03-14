import expertiseData from "../../data/expertiseData";
import "./Expertise.css";

function Expertise() {

  return (
    <section id="expertise" className="expertise section">

      <div className="container">

        <p className="section-tag">Expertise</p>

        <h2 className="section-title">
          Áreas de especialidad
        </h2>

        <div className="expertise__grid">

          {expertiseData.map((item) => (
            <div key={item.id} className="expertise__card card">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Expertise;