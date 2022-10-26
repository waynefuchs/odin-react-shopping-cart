import { Link } from "react-router-dom";

import "./CartDisplay.css";
import Cart from "../data/Cart";

const CartDisplay = (props) => {
  const { cart } = props;
  const c = new Cart(cart);

  return (
    <Link to="checkout" className="button">
      <div className="shoppingCartDisplay">
        <div className="circ">{c.Count()}</div>
        <div className="material-icons">shopping_cart</div>
        <div>{c.Price()}</div>
      </div>
    </Link>
  );
};

export default CartDisplay;
