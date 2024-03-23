import React from "react";
import { Logo } from "../Logo";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <header className="themeHeader flex justify-between px-12 py-4 items-center">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
