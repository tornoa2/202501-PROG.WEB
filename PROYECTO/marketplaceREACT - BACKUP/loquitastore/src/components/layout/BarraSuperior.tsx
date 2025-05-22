import './BarraSuperior.css';

const BarraSuperior = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/assets/icons/Logo.JPG" alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li><a href="#">Explorador</a></li>
        <li className="dropdown">
          <a href="#">Categorías</a>
          <ul className="dropdown-menu">
            <li><a href="#">Más Vendidos</a></li>
            <li><a href="#">Mejor Valorados</a></li>
          </ul>
        </li>
        <li><a href="#">Inicio</a></li>
        <li className="dropdown">
          <a href="#">Plataformas</a>
          <ul className="dropdown-menu">
            <li><a href="#">PC</a></li>
            <li><a href="#">PS5</a></li>
            <li><a href="#">XBOX</a></li>
            <li><a href="#">SWITCH</a></li>
          </ul>
        </li>
        <li><a href="#">Ofertas Especiales</a></li>
        <li className="icon-user">
          <img src="/assets/icons/usuario.JPG" alt="Usuario" />
        </li>
        <li className="search">
          <div className="search-container">
            <input type="text" placeholder="Buscar..." />
            <span className="search-icon">🔍</span>
          </div>
        </li>
        <li className="cart-button">
          <img src="/assets/icons/carrito-de-compras.png" alt="Carrito" />
        </li>
      </ul>
    </nav>
  );
};

export default BarraSuperior;
