// src/hooks/useCountry.js
import { useState, useEffect } from "react";

function useCountry(code) {
  // 1. declare state
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) return; // 2. early return if no code

    setLoading(true);
    setError(null);

    // optional: abort controller to cancel fetch if component unmounts
    const controller = new AbortController();

    // 4. fetch from RestCountries alpha endpoint
    fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Country not found");
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]); // response is an array
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    // cleanup: abort fetch if code changes or component unmounts
    return () => controller.abort();
  }, [code]);

  // 5. return object
  return { country, loading, error };
}

export default useCountry;
