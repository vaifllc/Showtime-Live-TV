<template>
  <div
    :class="[
      'offcanvas offcanvas-end cart-offcanvas',
      { show: stateStoreInstance.show },
    ]"
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title h3">All Cart</h3>
      <button
        type="button"
        class="btn-close"
        @click="stateStoreInstance.cartModal"
      ></button>
    </div>

    <div class="offcanvas-body">
      <ul class="cart-list scroll-bar" v-if="cartStore.cart.length > 0">
        <li
          class="d-flex justify-content-between align-items-center cart-item"
          v-for="item in cartStore.cart"
          :key="item.id"
        >
          <button
            class="p-0 border-0 bg-transparent delete-btn"
            @click="cartStore.removeFromCart(item.id)"
          >
            <i class="ri-delete-bin-7-line"></i>
          </button>
          <RouterLink
            class="dropdown-item d-flex align-items-center"
            to="/product-details"
          >
            <img :src="item.image" :alt="item.name" />
            <div class="ms-3 d-inline-block text-truncate">
              <span>
                {{ item.name }}
              </span>
              <h3>${{ item.price }}</h3>
            </div>
          </RouterLink>
        </li>
        <li class="d-flex justify-content-between align-items-center cart-item">
          <h3 class="fs-15 mb-0">Total</h3>
          <h3 class="fs-15 mb-0">${{ cartStore.totalPrice.toFixed(2) }}</h3>
        </li>
        <li class="d-flex justify-content-between align-items-center cart-item">
          <RouterLink
            @click="stateStoreInstance.cartModal"
            to="/cart"
            class="btn btn-primary fs-14 text-white"
          >
            <span class="border-style">View Cart</span>
          </RouterLink>
          <RouterLink to="/checkout" class="btn btn-warning fs-14 text-white">
            <span class="border-style">Checkout</span>
          </RouterLink>
        </li>
      </ul>
      <p v-else class="text-center mt-4">Your cart is empty.</p>
    </div>
  </div>

  <div
    :class="['offcanvas-backdrop fade', { show: stateStoreInstance.show }]"
    @click="stateStoreInstance.cartModal"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";
import { useCartStore } from "@/store/index";

export default defineComponent({
  name: "CartModal",
  setup() {
    const stateStoreInstance = stateStore;
    const cartStore = useCartStore();

    return {
      stateStoreInstance,
      cartStore,
    };
  },
});
</script>
