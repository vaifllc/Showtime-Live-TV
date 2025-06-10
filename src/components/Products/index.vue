<template>
  <div class="products-area ptb-100">
    <div class="container mw-1356">
      <div class="section-title mw-860">
        <span class="top-title">SHOP</span>
        <h2>Choose your product</h2>
      </div>

      <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
          <div class="row justify-content-center">
            <div
              v-for="product in products"
              :key="product.id"
              class="col-xl-4 col-md-6"
            >
              <div class="products-single-item transition-y">
                <div class="product-img position-relative z-1">
                  <RouterLink to="/product-details" class="d-block">
                    <img :src="product.image" :alt="product.name" />
                  </RouterLink>
                  <a
                    class="btn"
                    @click="addToCart(product)"
                    :disabled="isInCart(product.id)"
                  >
                    <span class="border-style">
                      {{ isInCart(product.id) ? "In Cart" : "Add To Cart" }}
                    </span>
                  </a>
                </div>

                <div class="product-content">
                  <ul class="ps-0 list-unstyled d-flex review">
                    <li v-for="star in 5" :key="star">
                      <i class="ri-star-s-fill"></i>
                    </li>
                  </ul>
                  <h3>
                    <RouterLink to="/product-details">
                      {{ product.name }}
                    </RouterLink>
                  </h3>
                  <h4>
                    <del v-if="product.oldPrice">${{ product.oldPrice }}</del>
                    ${{ product.price }}
                  </h4>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="pagination-area text-center mt-0">
                <span
                  class="next page-numbers"
                  @click="goToPage(currentPage - 1)"
                  :disabled="currentPage === 1"
                >
                  <i class="ri-arrow-left-s-line"></i>
                </span>

                <span
                  v-for="page in totalPages"
                  :key="page"
                  class="page-numbers"
                  :class="{ current: page === currentPage }"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </span>

                <span
                  class="next page-numbers"
                  @click="goToPage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                >
                  <i class="ri-arrow-right-s-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 order-1 order-lg-2 mb-5 mb-lg-0">
          <SidebarWidget />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useCartStore } from "@/store/index";
import SidebarWidget from "./SidebarWidget.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  components: {
    SidebarWidget,
  },
  setup() {
    const cartStore = useCartStore();

    const products = ref([
      {
        id: 1,
        image: require("@/assets/images/product-1.jpg"),
        name: "Gigabit Dual Band Whole Home Mesh Wi-Fi System Router",
        price: 129.0,
        oldPrice: 200.0,
      },
      {
        id: 2,
        image: require("@/assets/images/product-2.jpg"),
        name: "Whole Home Mesh Wi-Fi System Router with Gigabit Dual Band",
        price: 756.0,
      },
      {
        id: 3,
        image: require("@/assets/images/product-3.jpg"),
        name: "Gigabit Dual Band Wireless System Router for the Entire Home",
        price: 265.0,
      },
      {
        id: 4,
        image: require("@/assets/images/product-4.jpg"),
        name: "All-Inclusive Gigabit Dual Band Wireless System Router",
        price: 951.0,
      },
      {
        id: 5,
        image: require("@/assets/images/product-5.jpg"),
        name: "Router with Gigabit Dual Band Wireless System All-Inclusive",
        price: 159.0,
      },
      {
        id: 6,
        image: require("@/assets/images/product-6.jpg"),
        name: "All-Inclusive Gigabit Dual Band Wireless System Router",
        price: 350.0,
      },
      {
        id: 7,
        image: require("@/assets/images/product-7.jpg"),
        name: "Router with Gigabit Dual Band Wireless System All-Inclusive",
        price: 420.0,
      },
      {
        id: 8,
        image: require("@/assets/images/product-8.jpg"),
        name: "All-Inclusive Gigabit Dual Band Wireless System Router",
        price: 130.0,
        oldPrice: 200.0,
      },
      {
        id: 9,
        image: require("@/assets/images/product-9.jpg"),
        name: "Latest Model Gigabit Dual Band Wireless Router",
        price: 599.0,
      },
    ]);

    interface Product {
      id: number;
      image: string;
      name: string;
      price: number;
      oldPrice?: number;
      quantity?: number;
    }

    const addToCart = (product: Product) => {
      cartStore.addToCart(product);
      // alert(`${product.name} added to cart!`);
    };

    const isInCart = (productId: number) =>
      cartStore.cart.some((item) => item.id === productId);

    const currentPage = ref(1);
    const productsPerPage = 6;

    const totalPages = computed(() => {
      return Math.ceil(products.value.length / productsPerPage);
    });

    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * productsPerPage;
      return products.value.slice(start, start + productsPerPage);
    });

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    return {
      products: paginatedProducts,
      addToCart,
      isInCart,
      currentPage,
      totalPages,
      goToPage,
    };
  },
});
</script>
