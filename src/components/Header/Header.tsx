import React from "react";
import { Logo } from "../Logo";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
