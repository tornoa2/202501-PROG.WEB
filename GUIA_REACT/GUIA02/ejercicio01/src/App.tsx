import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuPage } from './pages/MenuPage';
import { LibrosPage } from './pages/LibrosPage';
import { VideojuegosPage } from './pages/VideojuegosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/libros" element={<LibrosPage />} />
        <Route path="/videojuegos" element={<VideojuegosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
