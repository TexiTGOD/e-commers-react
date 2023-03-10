import * as React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {items.map((e) => {
        return <Item e={e} key={e.id} />;
      })}
    </div>
  );
};

export default ItemList;
