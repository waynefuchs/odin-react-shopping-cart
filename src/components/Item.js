import "./Item.css";

const Item = (props) => {
  const { id, name, image, shortDescription, price } = props.data;

  return (
    <div className="item" key={id}>
      <h2>{name}</h2>
      <img src={image} alt={shortDescription} />
      <div className="item-price">
        <h2>
          {Number(price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          })}
        </h2>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Item;
