import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          <img src="./favicon.png" alt="Logo Ariel NIeto" width="30px" />
          {" "}
          Hopital Elpidio Torres © 2025 -
        </p>
        <p>
          Developed by 
          {" "}
          <img src="./an.png" alt="Logo Ariel NIeto" width="25px" className="LogoAN" />
          {" "}
          {/* Ariel Nieto */}
        </p>
      </div>

      <div className="whats">
        <a
          href="https://api.whatsapp.com/send?phone=543513461095&text=Hola, mi nombre es "
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/whatsapp-circle-1868968-1583132.png"
            alt="contactenos por whatsapp"
            width="50"
            height="50"
          />
        </a>
      </div>
    </>
  );
};
export default Footer