import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="perfil">Perfil</Link>
        </li>
        <li>
          <Link to="Contato">Contato</Link>
        </li>
        <li>
          <Link to="localizacao">Localização</Link>
        </li>
        <li>
          <Link to="horario">Horário</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
