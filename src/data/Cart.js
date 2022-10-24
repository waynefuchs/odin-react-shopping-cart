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

  Price() {
    return this.list.reduce((total, i) => total + itemdata[i].price, 0);
  }
}

export default Cart;