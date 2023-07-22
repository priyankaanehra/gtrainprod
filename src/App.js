import './App.css';
import Header from './Header.js'
import Footer from './Footer'
import Contact from './Contact.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home.js'
import Design from './Design.js'



function App() {
  return (
    <div className="container"> 
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/design' element={<Design />} />
          </Routes>
          <Footer/>
        </Router>      
    </div>
  );
}

export default App;
