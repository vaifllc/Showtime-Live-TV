<template>
  <div class="page-banner-area bg-secondary">
    <div class="container mw-1720">
      <div class="page-banner-content">
        <ul class="d-flex align-items-center ps-0 list-unstyled bredcrounbs">
          <li>
            <RouterLink to="/"> HOME </RouterLink>
          </li>
          <li>
            <span>SHOP</span>
          </li>
          <li>
            <span>CART</span>
          </li>
        </ul>
        <h2>Check your cart</h2>
      </div>
    </div>

    <div class="container mw-1356">
      <div class="table-responsive cart-table" v-if="cartStore.cart.length > 0">
        <table class="table align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartStore.cart" :key="item.id">
              <td>
                <RouterLink to="/product-details">
                  <img
                    :src="item.image"
                    class="cart-product"
                    :alt="item.name"
                  />
                </RouterLink>
              </td>
              <td class="ps-0">
                <RouterLink to="/product-details" class="title">
                  {{ item.name }}
                </RouterLink>
              </td>
              <td>
                <span class="price">${{ item.price }}</span>
              </td>
              <td>
                <div class="product-quantity">
                  <div
                    class="add-to-cart-counter d-flex align-items-center justify-content-between"
                  >
                    <input
                      type="button"
                      class="minusBtn"
                      value="-"
                      @click="decreaseQuantity(index)"
                    />
                    <input
                      type="text"
                      size="25"
                      class="count"
                      v-model="item.quantity"
                    />
                    <input
                      type="button"
                      class="plusBtn"
                      value="+"
                      @click="increaseQuantity(index)"
                    />
                  </div>
                </div>
              </td>
              <td>
                <span class="price">
                  ${{ item.price * (item.quantity || 0) }}
                </span>
              </td>
              <td>
                <button
                  class="border-0 p-0 bg-transparent remove"
                  @click="cartStore.removeFromCart(item.id)"
                >
                  <i class="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="text-center mt-4">Your cart is empty.</p>
    </div>

    <img
      src="@/assets/images/shape-20.png"
      class="shape-21 shape"
      alt="shape"
    />
    <img
      src="@/assets/images/shape-21.png"
      class="shape-22 shape"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/store/index";

export default defineComponent({
  name: "PageBanner",
  setup() {
    const cartStore = useCartStore();

    // Increase quantity for a specific item
    const increaseQuantity = (index: number) => {
      const item = cartStore.cart[index];
      if (item) {
        if (item.quantity !== undefined) {
          item.quantity++;
        }
      }
    };

    // Decrease quantity for a specific item
    const decreaseQuantity = (index: number) => {
      const item = cartStore.cart[index];
      if (item && item.quantity && item.quantity > 1) {
        item.quantity--;
      }
    };

    return {
      cartStore,
      increaseQuantity,
      decreaseQuantity,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-banner-area {
  &::before {
    height: 80px;
  }
}
</style>
