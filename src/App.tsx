import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Equipe from "./pages/sobre/equipe/Equipe";
import SobreOneToMany from "./pages/sobre/sobre-one-to-many/SobreOneToMany";
import Sobre from "./pages/sobre/Sobre";
import Cardapio from "./pages/home/cardapio/Cardapio";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />

            <Route path="/equipe" element={<Equipe />} />
            <Route path="/sobre-detalhes" element={<SobreOneToMany />} />
            <Route path="/cardapio" element={<Cardapio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
