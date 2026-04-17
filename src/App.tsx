import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Equipe from './pages/sobre/equipe/Equipe';
import SobreOneToMany from './pages/sobre/sobre-one-to-many/SobreOneToMany';
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/sobre" element={<Equipe/>} />
        <Route path="/sobre" element={<SobreOneToMany/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
