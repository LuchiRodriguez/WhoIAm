/* eslint-disable react/no-unknown-property */
import { NavBarStyled } from "../app/Styles";
import Logo from "../app/img/logo.png";
import Menu from "../app/img/menu.png";
import Areas from "../app/img/areas.png";
import Logros from "../app/img/logros.png";
import Mejoras from "../app/img/mejora.png";
import Ideas from "../app/img/ideas.png";
import Objetivos from "../app/img/busqueda.png";
import User from "../app/img/user.png";
import { Link } from "react-router-dom";
import DayHook from "../app/DayHook";

const NavBar = () => {
  const { today } = DayHook();
  return (
    <NavBarStyled>
      <Link to="/">
        <img src={Logo} alt="" />
        <h3>WHO I AM</h3>
      </Link>
      <p>{today}</p>
      <img src={Menu} alt="" />
      <div>
        <ul>
          <Link to="/profile">
            <li>
              <img src={User} alt="" />
              <p>Mi perfil</p>
            </li>
          </Link>
          <Link to="/areas">
            <li>
              <img src={Areas} alt="" />
              <p>Areas</p>
            </li>
          </Link>
          <Link to="/logros">
            <li>
              <img src={Logros} alt="" />
              <p>Logros</p>
            </li>
          </Link>
          <Link to="/mejoras">
            <li>
              <img src={Mejoras} alt="" />
              <p>Mejoras</p>
            </li>
          </Link>
          <Link to="/ideas">
            <li>
              <img src={Ideas} alt="" />
              <p>Ideas</p>
            </li>
          </Link>
          <Link to="/objetivos">
            <li>
              <img src={Objetivos} alt="" />
              <p>Objetivos</p>
            </li>
          </Link>
        </ul>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
