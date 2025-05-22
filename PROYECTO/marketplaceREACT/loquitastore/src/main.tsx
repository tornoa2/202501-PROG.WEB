import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import AdminLayout from './components/layout/layoutAdmin'
import GestorCatalogoPage from './pages/admin/GestorCatalogoPage'
import GestorNoticiasPage from './pages/admin/GestorNoticiasPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="gestorJuegos" element={<GestorCatalogoPage />} />
          <Route path="gestorNoticias" element={<GestorNoticiasPage />} />
          <Route path="gestorUsers" element={<p></p>} />
          <Route path="gestorStats" element={<p></p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)