import './NotFound.scss';

import { Link } from 'react-router';

const NotFound = () => {
  return (
    <main className="container notfound">
      <h1>404</h1>
      <p>Oups! La page demandée n&apos;existe pas.</p>
      <Link to="/" className="home">
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
};

export default NotFound;
