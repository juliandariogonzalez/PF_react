import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Header/Footer";

//Pages
import HomePage from "./pages/HomePage";
import BicicletasPage from "./pages/BicicletasPage";
import IndumentariaPage from "./pages/IndumentariaPage";
import AccesoriosPage from "./pages/AccesoriosPage";
import ComponentesPage from "./pages/ComponentesPage";
import Sobre_nosotrosPage from "./pages/Sobre_nosotrosPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage.jsx"
import CheckOutPage from "./pages/CheckOutPage.jsx";
//React router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import {CartContextComponent} from "./components/Header/CartContext";







const App = () => {
  return (
    <div className="fondo" >

    <Router>
      <CartContextComponent>
        
      <div >
        <Header/> 
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/bicicletas" element={<BicicletasPage />} />
          <Route path="/indumentaria" element={<IndumentariaPage/>}/>
          <Route path="/accesorios" element={<AccesoriosPage />} />
          <Route path="/componentes" element={<ComponentesPage />} />
          <Route path="/sobre_nosotros" element={<Sobre_nosotrosPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/chekout" element={<CheckOutPage/>} ></Route>
 
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
      </CartContextComponent>
    </Router>
    </div>
  );
};

export default App;
