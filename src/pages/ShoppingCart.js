import ItemCart from "../components/ItemCart";
import Cart from "../data/Cart";
import "./Shop.css";

import Footer from "../components/Footer";

const ShoppingCart = (props) => {
  const { cart, addFn } = props;
  const c = new Cart(cart);

  return (
    <>
      <div className="shop" data-testid="shop">
        {c.UniqueIDs().map(i => <ItemCart cart={cart} data={c.getItemData(i)} key={i} />)}
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
