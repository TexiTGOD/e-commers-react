import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../ProductosMock";
import CardMedia from "@mui/material/CardMedia";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));
  console.log(productSelected);
  const onAdd = (cantidad) => {
    console.log(`Se agrego al carrito ${cantidad} productos`);
  };
  return (
    <div>
      <CardMedia
        component="img"
        image={productSelected.img}
        sx={{ width: 500 }}
      />
      <h1>{productSelected.title}</h1>
      <h2>{productSelected.price}</h2>
      <p>{productSelected.description}</p>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
