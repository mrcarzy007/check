import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Playlist from './components/Playlist/Playlist';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
 import Footer from './components/Footer/Footer';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Header/>
     <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/playlist" element={<Playlist/>} />
      <Route  path="/contact" element={<Contact/>} />         
     </Routes>
     <Footer/>
    
    </>  
  )
}

export default App;
