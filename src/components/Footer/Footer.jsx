import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">© {new Date().getFullYear()} UCL Pulse</p>
      <p className="footer__source">Datos: football-data.org</p>
    </footer>
  );
}

export default Footer;
