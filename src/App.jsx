import MainLayout from './layouts/MainLayout';
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

          <Route path='/React-Portfolio/' element={<Index />}></Route>
          <Route path='/React-Portfolio/about' element={<About />}></Route>
          <Route path='/React-Portfolio/projects' element={<Projects />}></Route>
          <Route path='/React-Portfolio/contact' element={<Contact />}></Route>

        </Routes>



      </MainLayout>

    </BrowserRouter>
  );
}
export default App;
