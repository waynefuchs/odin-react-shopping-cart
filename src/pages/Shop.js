import Item from "../components/Item";
import allItems from "../item-data";
import "./Shop.css";

import Footer from "../components/Footer";

const Shop = (props) => {
  const { addFn } = props;

  return (
    <>
      <div className="shop" data-testid="shop">
        {Object.values(allItems).map((i) => (
          <Item data={i} key={i.id} addFn={addFn} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
