import uuid from 'uuid';
import { decorate, observable, action, computed } from 'mobx';

class ShoppingStore {
  items = [];

  setItems(itemsInit) {
    itemsInit.forEach(item => this.items.push({ ...item, id: uuid(), qty: 0 }));
  }

  add = (itemName, num = 1) => {
    const item = this.items.find(item => item.name === itemName);
    item.qty += num;
  };
  remove = (itemName, num = 1) => {
    const item = this.items.find(item => item.name === itemName);
    item.qty -= num;
  };
  reset = () => {
    this.items.map(item => {
      item.qty = 0;
      return item;
    });
  };

  get totalPrice() {
    let total = 0;
    for (const item of this.items) {
      if (item.name !== 'Papaya') total += item.qty * item.price;
      else total += (item.qty - Math.floor(item.qty / 3)) * item.price;
    }
    return total;
  }
}

const DecoratedShoppingStore = decorate(ShoppingStore, {
  items: observable,
  add: action,
  remove: action,
  reset: action,
  setItems: action,
  totalPrice: computed
});

export default new DecoratedShoppingStore();
