import { useState, useEffect } from "react";
import { products } from "../../ProductosMock";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    }, [])
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setItems(error);
      });
  });

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
