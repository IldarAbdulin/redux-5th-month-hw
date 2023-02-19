import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayOut } from './components/LayOut';
import { Photo } from './components/Photo';
import {HomePage, AboutPage, ContactPage, NewsPage, PhotosPage, NotFoundPage} from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />}/>
          <Route path='contacts' element={<ContactPage />}/>
          <Route path='news' element={<NewsPage />}/>
          <Route path='photos' element={<PhotosPage />}/>
        </Route>
        <Route path='photos/:id' element={<Photo />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
