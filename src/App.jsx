import MainLayout from './layouts/MainLayout';
// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';


function App() {
  return (


    <BrowserRouter >

      <MainLayout>

        <Routes>

          <Route path='/' element={<Index />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>

        </Routes>



      </MainLayout>

    </BrowserRouter>
  );
}

export default App;
