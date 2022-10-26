import ItemCart from "../components/ItemCart";
import Cart from "../data/Cart";
import "./Shop.css";

import Footer from "../components/Footer";

const ShoppingCart = (props) => {
  const { cart, addFn, rmFn } = props;
  const c = new Cart(cart);

  return (
    <>
      <div className="shop" data-testid="shop">
        {console.log(cart)}
        {cart.length > 0
          ? c.UniqueIDs().map(i => <ItemCart cart={cart} data={c.getItemData(i)} key={i} addFn={addFn} rmFn={rmFn} />)
          : <h2>Shopping Cart is Empty!</h2>}
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
