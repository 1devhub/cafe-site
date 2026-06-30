class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cafe_cart') || '[]');
    this.listeners = [];
  }

  subscribe(fn) {
    this.listeners.push(fn);
  }

  _notify() {
    localStorage.setItem('cafe_cart', JSON.stringify(this.items));
    this.listeners.forEach(fn => fn(this.items));
  }

  addItem(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this._notify();
  }

  removeItem(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this._notify();
  }

  increment(productId) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.qty += 1;
      this._notify();
    }
  }

  decrement(productId) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      if (item.qty <= 1) {
        this.removeItem(productId);
      } else {
        item.qty -= 1;
        this._notify();
      }
    }
  }

  getQty(productId) {
    const item = this.items.find(i => i.id === productId);
    return item ? item.qty : 0;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  getCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  clear() {
    this.items = [];
    this._notify();
  }
}

const cart = new Cart();
