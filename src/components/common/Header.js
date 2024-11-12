import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Menu } from "./Menu";
export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transparent] = useState(0);
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (scrollPosition > window.scrollY || window.scrollY < 95) {
        setVisibility(false);
      } else {
        setVisibility(true);
      }
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const holder = visibility ? "header nav__hidden" : "header";

  const navStyles = holder + (transparent ? " transparent" : "");

  const linkStyles = transparent ? "header__link transparent" : "header__link";

  const hamStyles = transparent ? "header__menu transparent" : "header__menu";

  return (
    <header className={navStyles}>
      <div className="header__logo">
        <Link to="/" className="logo__link">
          <h1 className="logo__text">
            <span className="logo__text__span">F</span>ukla
          </h1>
        </Link>
      </div>

      <div className="header__links">
        <Link to="/" className={linkStyles}>
          Начало
        </Link>
        <Link to="/braids" className={linkStyles}>
          Плитки
        </Link>
        {/* <Link to="/makeup" className={linkStyles}>Грим</Link> */}
        <Link to="/nails" className={linkStyles}>
          Маникюр
        </Link>
      </div>

      <div className={hamStyles}>
        <Menu />
      </div>
    </header>
  );
};
