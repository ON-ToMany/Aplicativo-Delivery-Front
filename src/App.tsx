import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Equipe from "./pages/sobre/equipe/Equipe";
import SobreOneToMany from "./pages/sobre/sobre-one-to-many/SobreOneToMany";
import Sobre from "./pages/sobre/Sobre";
import GerenciarCategorias from "./components/categorias/gerenciar-categorias/GerenciarCategorias";
import FormCategoria from "./components/categorias/form-categoria/Categoria-Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sobre/equipe" element={<Equipe />} />        
          <Route path="/sobre/one-to-many" element={<SobreOneToMany />} /> 
          <Route path="/categorias" element={<GerenciarCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;