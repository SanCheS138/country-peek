import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import CountryCard from "../components/CountryCard";

function Favourites() {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return (
      <div className="favourites-page">
        <h2>Favourites</h2>
        <p>You have not saved any countries yet.</p>
        <Link to="/" className="back-link">
          Go back and explore
        </Link>
      </div>
    );
  }

  return (
    <div className="favourites-page">
      <h2>Favourites</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
