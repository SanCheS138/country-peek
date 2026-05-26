import { createContext, useState, useContext } from "react";

// 1. Create the context
const ThemeContext = createContext();

// 2. ThemeProvider component
export function ThemeProvider({ children }) {
  // 3. Theme state — start with 'light'
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    // 4. Toggle between 'light' and 'dark'
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // 5. Update body attribute for CSS variables
    if (newTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }

  // 6. Provide theme + toggle
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 7. Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
