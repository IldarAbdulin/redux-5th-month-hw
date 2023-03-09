import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhotoPage } from './pages/PhotoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/:id' element={<PhotoPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
