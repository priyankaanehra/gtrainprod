import './App.css';
import Header from './Header.js'
import MainContent from './MainContent'
import Footer from './Footer'
import Contact from './Contact.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home.js'
import Design from './Design.js'



function App() {
  return (
    <div className="container"> 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/design' element={<Design />} />
          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
