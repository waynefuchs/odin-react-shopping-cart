import itemdata from "../item-data";

// A simple naive solution for a shopping cart(?)
// Proof-of-concept
class Cart {
  list;

  // Takes a list of item `id`s
  constructor(list = null) {
    this.list = list ?? [];
  }

  Count() {
    return this.list.length;
  }

  Price(id=null) {
    const startingList = (id!==null) ? this.list.filter(i => i === id) : this.list;
    return Number(startingList.reduce((total, i) => total + itemdata[i].price, 0) / 100)
        .toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })
  }

  UniqueIDs() {
    return [...new Set(this.list)];
  }

  quantity(id) {
    return this.list.filter(i => i === id).length;
  }

  getItemData(id) {
    return itemdata[id];
  }
}

export default Cart;