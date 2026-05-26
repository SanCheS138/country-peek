import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CountryCard from "../components/CountryCard";
import "../styles/App.css";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (!query.trim()) return; // ✅ prevent fetch on spaces

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`https://restcountries.com/v3.1/name/${query.trim()}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("No countries found");
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [query]);

  const displayed = countries
    .filter((c) => region === "All" || c.region === region)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.common.localeCompare(b.name.common);
      if (sortBy === "population") return b.population - a.population;
      return 0;
    });

  return (
    <div className="home">
      <SearchBar query={query} onQueryChange={setQuery} />
      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {loading && <p className="page-status">Loading...</p>}
      {error && <p className="page-status page-status--error">{error}</p>}

      <div className="cards-grid">
        {displayed.length === 0 && !loading && !error && (
          <p className="page-status">No countries found for this region</p>
        )}
        {displayed.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
