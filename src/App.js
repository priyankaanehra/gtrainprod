import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer'
import Contact from './Pages/Contact.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home.js'
import Design from './Pages/Design.js'
import { createBrowserHistory } from "history"




function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="container"> 
        <Router>
          <Header/>
          <Routes basename={history}>
            <Route path="/" element={<Home/>}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/design' element={<Design />} />
            <Route component={() => (<div>404 Not found </div>)} />
          </Routes>
          <Footer/>
        </Router>      
    </div>
  );
}

export default App;
