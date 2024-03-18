import React, { useState } from "react";

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
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
