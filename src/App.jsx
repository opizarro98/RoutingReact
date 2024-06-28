import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ApiMercadoLibre from './pages/ApiMercadoLibre';
import GlobalStyle from "./assets/GlobalStyle";


const App = () => {
    return (
      <>
       <GlobalStyle />
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/apimercadolibre" element={<ApiMercadoLibre />} />
            </Routes>   
            <Footer/>     
        </BrowserRouter>
      </>
    );
};

export default App;