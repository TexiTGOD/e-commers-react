import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola como te va?"} />
      <ProductCard titulo={"Producto 1"} precio={230} />
      <ProductCard titulo={"Producto 2"} precio={100} />
      <ProductCard titulo={"Producto 3"} precio={400} />
      <Footer />
    </div>
  );
}

export default App;
