import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetaliContainer/ItemDetailContainer";
import Nosotros from "./Components/Nosotros/Nosotros";
function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego ${cantidad} elementos`);
  };
  const stock = 5;
  const initial = 1;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nosotros />} />
        <Route path="/menu" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error 404: Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
