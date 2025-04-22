import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import PokemonDetails from './PokemonDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
