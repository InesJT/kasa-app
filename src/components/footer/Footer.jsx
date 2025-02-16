import './Footer.scss';

import logo from '/src/assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo}></img>
      <p>© 2025 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
