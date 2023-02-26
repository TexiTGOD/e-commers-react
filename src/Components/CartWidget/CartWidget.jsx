import { BsFillCartPlusFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <BsFillCartPlusFill color="black" size={30} />
    </div>
  );
};

export default CartWidget;
