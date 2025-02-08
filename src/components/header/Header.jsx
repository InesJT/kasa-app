import { Link } from "react-router";
import "./Header.scss";

import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
