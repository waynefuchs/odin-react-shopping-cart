import "./Item.css";

const Item = (props) => {
  return (<div className="item">
    <h2>{props.name}</h2>
    <img src={props.image} alt={props.shortDescription} />
    <h2>{props.price}</h2>
    <button>Add To Cart</button>
  </div>);
};

export default Item;
