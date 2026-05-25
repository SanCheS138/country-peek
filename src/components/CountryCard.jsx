import { Link } from "react-router-dom";

function CountryCard({ country }) {
  // 1. destructure name, flags, population, region, capital, cca3 from country
  const { name, flags, population, region, capital, cca3 } = country;

  return (
    // 2. wrap in a Link to /country/{cca3}, className="card"
    <Link to={`/country/${cca3}`} className="card">
      {/* 3. flag image — src from flags.svg, alt text, className="card__flag" */}
      <img
        src={flags.svg}
        alt={`Flag of ${name.common}`}
        className="card__flag"
      />

      {/* 4. card body div, className="card__body" */}
      <div className="card__body">
        {/* country name */}
        <h3 className="card__name">{name.common}</h3>

        {/* population formatted with toLocaleString */}
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>

        {/* region */}
        <p>
          <strong>Region:</strong> {region}
        </p>

        {/* capital — use capital?.[0] ?? 'N/A' */}
        <p>
          <strong>Capital:</strong> {capital?.[0] ?? "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
