import Item from "../components/Item"
import allItems from '../item-data';

const Shop = () => {

    return (
        <div className="shop" data-testid="shop">
            {allItems.forEach(i => <Item data={i} />)}
        </div>
    )

}

export default Shop;