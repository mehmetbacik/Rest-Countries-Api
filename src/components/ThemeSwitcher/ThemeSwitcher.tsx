import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(theme === "dark" ? "dark" : "light");
    document.body.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="themeSwitcher flex items-center gap-2 bg-transparent font-semibold py-2 px-4"
    >
      {theme === "light" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      {theme === "light" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
