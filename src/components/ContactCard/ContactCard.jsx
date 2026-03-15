import "./ContactCard.css";
import qr from "../../assets/qr-contact.png";

function ContactCard() {
  return (
    <div className="contactCard">
      <div className="contactCard__container">
        <p className="contactCard__eyebrow">Contacto</p>

        <h3 className="contactCard__title">Conectemos</h3>

        <p className="contactCard__subtitle">
          Escanea el código QR para contactar directamente o acceder a su perfil
          profesional.
        </p>

        <div className="contactCard__qr">
          <img src={qr} alt="QR de contacto" />
        </div>

        <div className="contactCard__actions">
          <a
            href="mailto:correo@dominio.com"
            className="contactCard__btn contactCard__btn--primary"
          >
            Enviar correo
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="contactCard__btn contactCard__btn--secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;