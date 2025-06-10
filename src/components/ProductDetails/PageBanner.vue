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
            <span>PRODUCT DETAILS</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mw-1356">
      <div class="row">
        <div class="col-lg-6">
          <div class="products-details-img">
            <img src="@/assets/images/product-1.jpg" alt="product" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="products-details-content">
            <h2>Gigabit Dual Band Whole Home Mesh Wi-Fi System Router</h2>
            <ul class="ps-0 list-unstyled star d-flex gap-1">
              <li>
                <i class="ti ti-star-filled"></i>
              </li>
              <li>
                <i class="ti ti-star-filled"></i>
              </li>
              <li>
                <i class="ti ti-star-filled"></i>
              </li>
              <li>
                <i class="ti ti-star-filled"></i>
              </li>
              <li>
                <span>4.8</span>
              </li>
            </ul>
            <h3><del>$145.00</del> $129.00</h3>

            <div class="product-quantity d-flex">
              <div
                class="add-to-cart-counter d-flex justify-content-between align-content-center"
              >
                <input
                  type="button"
                  class="minusBtn"
                  value="-"
                  @click="decreaseQuantity"
                />
                <input type="text" class="count" size="25" v-model="quantity" />
                <input
                  type="button"
                  class="plusBtn"
                  value="+"
                  @click="increaseQuantity"
                />
              </div>
              <RouterLink to="/cart" class="btn ms-4">
                <span class="border-style">Add To Cart</span>
              </RouterLink>
            </div>
            <ul class="ps-0 mb-0 list-unstyled sku-list">
              <li>
                <span class="text-secondary">SKU:</span>
                <span>123JKL</span>
              </li>
              <li>
                <span class="text-secondary">CATEGORIES:</span>
                <span>Electronics</span>
              </li>
              <li>
                <span class="text-secondary">TAGS:</span>
                <span>electronics, broadband</span>
              </li>
              <li>
                <span class="text-secondary">AVAILABILITY:</span>
                <span class="text-grey-teal">Instock</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageBanner",
  setup() {
    const quantity = ref(1);

    const increaseQuantity = () => {
      quantity.value++;
    };

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    return {
      quantity,
      increaseQuantity,
      decreaseQuantity,
    };
  },
});
</script>
