// Home.jsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  // 3. declare query state, initialise to empty string
  const [query, setQuery] = useState("");

  return (
    // 4. div.home
    <div className="home">
      {/* SearchBar — pass query and the setter as props */}
      <SearchBar query={query} onQueryChange={setQuery} />

      {/* Placeholder line */}
      <p className="home__placeholder">Start searching to explore countries.</p>
    </div>
  );
}

export default Home;
