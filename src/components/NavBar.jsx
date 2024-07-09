import { NavBarStyled } from "../app/Styles";
import Logo from "../app/img/logo.png";
import Areas from "../app/img/areas.png";
import Logros from "../app/img/logros.png";
import Mejoras from "../app/img/mejora.png";
import Ideas from "../app/img/ideas.png";
import Objetivos from "../app/img/busqueda.png";
import User from "../app/img/user.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarStyled>
      <Link to="/">
        <img src={Logo} alt="" />
        <h3>WHO I AM</h3>
      </Link>
      <ul>
        <li>
          <img src={Areas} alt="" />
          <p>Areas</p>
        </li>
        <li>
          <img src={Logros} alt="" />
          <p>Logros</p>
        </li>
        <li>
          <img src={Mejoras} alt="" />
          <p>Mejoras</p>
        </li>
        <li>
          <img src={Ideas} alt="" />
          <p>Ideas</p>
        </li>
        <li>
          <img src={Objetivos} alt="" />
          <p>Objetivos</p>
        </li>
        <li>
          <img src={User} alt="" />
          <p>Mi perfil</p>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
