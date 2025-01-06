import { Link } from "react-router"

const Header = () => {
return (
  <>
    <h1>Kasa</h1>
    <Link to="/">Accueil</Link>
    <Link to="/about">A Propos</Link>
  </>
)}

export default Header
