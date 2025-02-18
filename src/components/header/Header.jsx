import './Header.scss';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import logo from '/src/assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('Accueil');
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentPage('Accueil');
    } else if (location.pathname === '/about') {
      setCurrentPage('A propos');
    } else {
      setCurrentPage('');
    }
  }, [location]);
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className={currentPage === 'Accueil' ? 'active' : ''}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={currentPage === 'A propos' ? 'active' : ''}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
