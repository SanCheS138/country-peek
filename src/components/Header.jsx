import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1 className="header__title">CountryPeek</h1>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        <button
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          onClick={toggleTheme}
          className="theme-toggle"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
