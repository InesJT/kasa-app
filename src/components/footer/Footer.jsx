import "./Footer.scss";

import logo from "/src/assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo}></img>
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
