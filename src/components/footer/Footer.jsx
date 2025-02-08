import logo from "../../assets/images/logo-white.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo}></img>
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
