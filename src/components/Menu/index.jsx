import style from "./Menu.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/klabLogo.png";
import { useState } from "react";
import iconOpen from "../../assets/images/iconOpen.png";
import iconClose from "../../assets/images/iconClose.png";

export default function Menu() {
  const routes = [
    { label: "Home", to: "/" },
    { label: "Tabela", to: "/tabela" },
    { label: "Produtos", to: "/produtos" },
  ];
  const [drawer, setDrawer] = useState(false);

  const toggleMenu = () => {
    setDrawer((res) => !res);
  };
  return (
    <nav className={style.menu}>
      <img src={logo} className={style.logo} alt="Logo" />
      <ul className={style.menu__list}>
        {routes.map((route, ind) => (
          <li key={ind} className={style.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
      <img
        src={iconOpen}
        className={style.iconOpen}
        alt="iconOpen"
        onClick={toggleMenu}
      />
      <div
        className={
          drawer ? `${style.boxLinks}  ${style.drawerActive}` : style.boxLinks
        }
      >
        <img
          src={iconClose}
          className={style.iconClose}
          alt="iconClose"
          onClick={toggleMenu}
        />
        <ul className={style.menu__list_mobile}>
          {routes.map((route, ind) => (
            <li key={ind} className={style.menu__link}>
              <Link to={route.to} onClick={toggleMenu}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
