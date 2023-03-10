import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego ${cantidad} elementos`);
  };
  const stock = 5;
  const initial = 1;
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <Footer />
    </div>
  );
}

export default App;
