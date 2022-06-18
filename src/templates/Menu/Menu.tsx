import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <ul>
        <li>Menu</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Dados Perfil</li>
        <ul>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/Contato">Horário de Funcionamento</Link>
          </li>
          <li>
            <Link to="/localizacao">Localização</Link>
          </li>
          <li>
            <Link to="/categoria">Categoria</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/senha">Senha</Link>
          </li>
        </ul>
        <li>Produtos</li>
        <ul>
          <li>
            <Link to="/categoria-produtos">Categoria de produtos</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/promocoes">Promoções</Link>
          </li>
        </ul>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>Imagens</li>
        <ul>
          <li>
            <Link to="/album">Album</Link>
          </li>
          <li>
            <Link to="/imagens">Imagens</Link>
          </li>
        </ul>
        <li>
          <Link to="/artigos">Artigos</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/postagens">Postagens</Link>
        </li>
        <li>
          <Link to="/estatisticas">Estatísticas</Link>
        </li>
        <li>Sair</li>
      </ul>
    </div>
  );
};

export default Menu;
