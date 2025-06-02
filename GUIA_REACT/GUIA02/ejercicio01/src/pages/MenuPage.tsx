import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

export const MenuPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const irALibros = () => {
    navigate('/libros', { state: { name } });
  };

  const irAVideojuegos = () => {
    sessionStorage.setItem('name', name);
    navigate('/videojuegos');
  };

  return (
    <div className="menu-page">
      <h1>Menu</h1>

      <input
        type="text"
        placeholder="name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="menu-input"
      />

      <div className="menu-buttons">
        <button onClick={irALibros}>LIBROS</button>
        <button onClick={irAVideojuegos}>VIDEOJUEGOS</button>
      </div>
    </div>
  );
};
