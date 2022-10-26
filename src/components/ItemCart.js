import Cart from "../data/Cart";
import "./Item.css";

const ItemCart = (props) => {
  const { removeFn, addFn, subFn, data, cart } = props;
  const { id, name, image, shortDescription, price } = data;
  const c = new Cart(cart);

  return (
    <div className="item">
      <h2>{name}</h2>
      <img src={image} alt={shortDescription} />
      <div className="item-price">
        <h2>
          {c.Price(id)}
        </h2>

        <button onClick={() => addFn(id)}>-</button>
        <p>{c.quantity(id)}</p>
        <button onClick={() => addFn(id)}>+</button>
      </div>
    </div>
  );
};

export default ItemCart;
