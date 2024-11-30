
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import Commonnavbar from './CommonNavbar/Commonnavbar';
import ScrollToTop from './components/ScrllToTop';
import Aos from 'aos'
import "aos/dist/aos.css"

import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import ITConsulting from './Pages/ITConsulting'
import AISolutions from './Pages/AISolutions';
import Aboutus from './Pages/Aboutus';
import Microservices from './Pages/Microservices';
import Contactus from './Pages/Contactus';
import Supplychain from './Pages/Supplychain';
import Fintech from './Pages/Fintech';
function App() {
  useEffect(() => {
    Aos.init({duration:2000})
   }, [])
  return (
    <Router>
    <div className="App">
   
  <Commonnavbar/>
  <ScrollToTop />

    <Routes>
    
     <Route path='/' element={<Homepage/>}/>
     <Route path='/itconsulting' element={<ITConsulting/>}/>
     <Route path='/aisolutions' element={<AISolutions/>}/>
     <Route path='/aboutus' element={<Aboutus/>}/>
     <Route path='/microservices' element={<Microservices/>}/>
     <Route path='/contactus' element={<Contactus/>}/>
     <Route path='/supplychain' element={<Supplychain/>}/>
     <Route path='/fintech' element={<Fintech/>}/>
</Routes>
 
<Footer/>
    </div>

    </Router>
  );
}

export default App;
