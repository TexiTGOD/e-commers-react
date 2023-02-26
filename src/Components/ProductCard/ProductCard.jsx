const ProductCard = (props) => {
  let { titulo, precio } = props;
  return (
    <div>
      <h2>{titulo}</h2>
      <h2>{precio}</h2>
    </div>
  );
};

export default ProductCard;
