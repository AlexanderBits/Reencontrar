import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { ItemProvider } from './src/hooks/useItems';

const App: React.FC = () => {
  return (
    <ItemProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Outras rotas como /anunciar, /chat, /login serão adicionadas conforme prosseguimos */}
        </Routes>
      </BrowserRouter>
    </ItemProvider>
  );
};

export default App;