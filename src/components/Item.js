import "./Item.css";

const Item = (props) => {
  const { name, image, shortDescription, price } = props.data;

  return (
    <div className="item">
      <h2>{name}</h2>
      <img src={image} alt={shortDescription} />
      <div className="item-price">
        <h2>
          {Number(price/100).toLocaleString("en-US", {
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
