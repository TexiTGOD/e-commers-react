import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <span>0</span>

        <ShoppingCartIcon
          sx={{
            color: "#332B47",
          }}
        />
      </div>
    </Link>
  );
};

export default CartWidget;
