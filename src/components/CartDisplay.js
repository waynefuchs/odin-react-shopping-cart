import "./CartDisplay.css";
import Cart from "../data/Cart";

const CartDisplay = (props) => {
  const {cart} = props;
  const c = new Cart(cart);

  return (
    <div className="shoppingCartDisplay button">
      <div className="circ">{c.Count()}</div>
      <div className="material-icons">shopping_cart</div>
      <div>{c.Price()}</div>
    </div>
  );
};

export default CartDisplay;
