import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego ${cantidad} Productos`);
  };
  const stock = 5;
  const initial = 1;
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola como te va?"} />
      <ProductCard titulo={"Producto 1"} precio={230} />
      <ProductCard titulo={"Producto 2"} precio={100} />
      <ProductCard titulo={"Producto 3"} precio={400} />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <Footer />
    </div>
  );
}

export default App;
