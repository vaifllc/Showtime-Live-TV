<template>
  <div class="container mw-1356">
    <div class="coupon-wrap">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-6 mb-3 mb-sm-0">
          <RouterLink to="/products" class="read-more style-two">
            <i class="ti ti-arrow-left"></i>
            Back To Shop
          </RouterLink>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="position-relative z-1">
            <input
              type="text"
              class="form-control bg-white w-100"
              placeholder="Coupon Code"
            />
            <button
              type="submit"
              class="btn position-absolute top-50 end-0 translate-middle-y"
            >
              <span class="border-style">Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="ptb-100">
      <div class="total-cart">
        <h3>Cart Totals</h3>
        <ul>
          <li class="d-flex justify-content-between">
            <span class="title">Subtotal</span>
            <span class="price">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </li>
          <li class="d-flex justify-content-between">
            <span class="title">Total</span>
            <span class="price">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </li>
        </ul>
        <div class="text-center">
          <RouterLink to="/checkout" class="btn">
            <span class="border-style">Proceed To Checkout</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/store/index";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cart",
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
});
</script>
