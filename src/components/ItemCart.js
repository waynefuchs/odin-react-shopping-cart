import Cart from "../data/Cart";
import "./Item.css";

const ItemCart = (props) => {
  const { rmFn, addFn, data, cart } = props;
  const { id, name, image, shortDescription } = data;
  const c = new Cart(cart);

  return (
    <div className="item">
      <h2>{name}</h2>
      <img src={image} alt={shortDescription} />
      <div className="item-price">
        <h2>
          {c.Price(id)}
        </h2>

        <div className="adjustQuantity">
          <button className="addsub" onClick={() => rmFn(id)}>-</button>
          <p>{c.quantity(id)}</p>
          <button className="addsub" onClick={() => addFn(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
