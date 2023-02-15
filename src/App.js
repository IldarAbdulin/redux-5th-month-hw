import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/hoc/Layout';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { MainPage } from './pages/mainPage/MainPage';
import { PortfolioPage } from './pages/portfolioPage/PortfolioPage';
import { TodoPage } from './pages/todosPage/TodoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="todos" element={<TodoPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
