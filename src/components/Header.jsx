import { Link } from "react-router-dom";
import "../styles/App.css";

function Header() {
  return (
    // 1. header element, className="header"
    <header className="header">
      {/* Link to "/" with className="header__brand", text: CountryPeek */}
      <Link to="/" className="header__brand">
        CountryPeek
      </Link>

      {/* nav element, className="header__nav" */}
      <nav className="header__nav">
        {/* Link to "/" — Home */}
        <Link to="/">Home</Link>

        {/* Link to "/favourites" — Favourites */}
        <Link to="/favourites">Favourites</Link>
      </nav>
    </header>
  );
}

export default Header;
