import credentialsData from "../../data/credentialsData";
import "./Credentials.css";

function Credentials() {
  return (
    <section className="credentials section">
      <div className="container">
        <div className="credentials__grid card">
          {credentialsData.map((item) => (
            <div key={item.id} className="credentials__item">
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;