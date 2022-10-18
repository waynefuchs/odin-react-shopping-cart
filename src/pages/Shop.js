import Item from "../components/Item";
import allItems from "../item-data";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop" data-testid="shop">
      {allItems.map((i) => (
        <Item data={i} />
      ))}
    </div>
  );
};

export default Shop;