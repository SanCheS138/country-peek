// src/pages/CountryPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountries.js";
import "../styles/App.css";

function CountryPage() {
  // 1. read the country code from the URL
  const { code } = useParams();

  // 2. set up navigate
  const navigate = useNavigate();

  // 3. call useCountry(code)
  const { country, loading, error } = useCountry(code);

  // 4. handle loading state
  if (loading) return <p className="home__status">Loading...</p>;

  // 5. handle error state
  if (error) return <p className="home__status home__status--error">{error}</p>;

  // 6. handle null country
  if (!country) return null;

  // 7. destructure fields
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
  } = country;

  // 8. convert languages object → array
  const languageList = languages ? Object.values(languages) : [];

  // 9. convert currencies object → array of names
  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name)
    : [];

  return (
    <div className="country-page">
      {/* back button */}
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>

      <div className="country-page__layout">
        {/* flag */}
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="detail__flag"
        />

        <div className="country-page__info">
          {/* names */}
          <h2>{name.common}</h2>
          <p className="official-name">{name.official}</p>

          <div className="country-page__details">
            <div className="details-left">
              <p>
                <strong>Population:</strong> {population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Subregion:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital?.[0] ?? "N/A"}
              </p>
            </div>

            <div className="details-right">
              <p>
                <strong>Languages:</strong>{" "}
                {languageList.length ? languageList.join(", ") : "N/A"}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {currencyList.length ? currencyList.join(", ") : "N/A"}
              </p>
            </div>
          </div>

          {/* borders */}
          {borders && borders.length > 0 && (
            <div className="borders">
              <strong>Borders:</strong>
              <div className="border-list">
                {borders.map((border) => (
                  <span key={border} className="border-badge">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
