import { defineStore } from "pinia";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  quantity?: number;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as Product[],
  }),
  getters: {
    totalItems: (state: { cart: Product[] }) =>
      state.cart.reduce((acc, item) => acc + (item.quantity || 1), 0),
    totalPrice: (state: { cart: Product[] }) =>
      state.cart.reduce(
        (acc: number, item: Product) => acc + item.price * (item.quantity || 1),
        0
      ),
    cartItemCount: (state) =>
      state.cart.reduce((total, item) => total + (item.quantity || 1), 0),
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity !== undefined) {
          existingItem.quantity++;
        } else {
          existingItem.quantity = 1;
        }
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter((p) => p.id !== productId);
    },
  },
});
