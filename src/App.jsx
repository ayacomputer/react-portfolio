import MainLayout from './layouts/MainLayout';
import logo from './logo.svg';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/about';
import Contact from './pages/contact';
import Index from './pages';
function App() {
  return (


    <BrowserRouter >

      <MainLayout>
        
        <Routes>

          <Route path='/' element={<Index/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        </Routes>



      </MainLayout>
      
    </BrowserRouter>
  );
}

export default App;
