import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

function CountryCard({ country }) {
  const { name, flags, population, region, cca3 } = country;
  const { favourites, dispatch } = useFavourites();

  const isSaved = favourites.some((f) => f.cca3 === cca3);

  function handleFavourite(e) {
    e.stopPropagation();
    e.preventDefault(); // prevent Link navigation
    if (isSaved) {
      dispatch({ type: "REMOVE_FAVOURITE", payload: cca3 });
    } else {
      dispatch({ type: "ADD_FAVOURITE", payload: country });
    }
  }

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.svg} alt={`Flag of ${name.common}`} className="card__flag" />
      <div className="card__body">
        <h3>{name.common}</h3>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <button
          onClick={handleFavourite}
          className={`fav-btn ${isSaved ? "fav-btn--saved" : ""}`}
        >
          {isSaved ? "♥ Saved" : "♡ Save"}
        </button>
      </div>
    </Link>
  );
}

export default CountryCard;
