<template>
  <nav :class="['navbar navbar-expand-lg bg-black p-0', { sticky: isSticky }]">
    <div class="container mw-1720 bg-white px-50 position-relative">
      <RouterLink class="navbar-brand" to="/">
        <img
          src="@/assets/images/logo.svg"
          class="main-logo"
          alt="white-logo"
        />
        <img
          src="@/assets/images/white-logo.svg"
          class="white-logo d-none"
          alt="white-logo"
        />
      </RouterLink>
      <a class="navbar-toggler" @click="stateStoreInstance.responsiveNavbar">
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/"
            >
              Home
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>

            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/services">
                  Services
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/services-details">
                  Services Details
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>

            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/about-us">
                  About Us
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/testimonials">
                  Testimonials
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/pricing-plan">
                  Pricing Plan
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/channel-list">
                  Channel List
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/faq"> FAQ </RouterLink>
              </li>
              <li>
                <a
                  class="dropdown-item sub-dropdown dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Authentication
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <RouterLink class="dropdown-item" to="/login-register">
                      Login / Register
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/login">
                      Login
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/register">
                      Register
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/change-password">
                      Change Password
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/forgot-password">
                      Forgot Password
                    </RouterLink>
                  </li>
                </ul>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/privacy-policy">
                  Privacy Policy
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/terms-conditions">
                  Terms & Conditions
                </RouterLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>

            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="/products">
                  Products
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/product-details">
                  Product Details
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/cart"> Cart </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/checkout">
                  Checkout
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/pay-bill">
                  Pay Bill
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/pay-bill-pin">
                  Pay Bill PIN
                </RouterLink>
              </li>
            </ul>
          </li>



          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/pricing-plan">
              Pricing Plan
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/contact-us">
              Contact Us
            </RouterLink>
          </li>
        </ul>
      </div>

      <ul
        class="d-flex ps-0 mb-0 list-unstyled justify-content-end align-items-center others-options"
      >
        <li class="d-none d-sm-inline-block">
          <a href="tel:125487568" class="call icon">
            <i class="ti ti-phone-incoming"></i>
          </a>
        </li>
        <li>
          <a class="cart icon" @click="stateStoreInstance.cartModal">
            <i class="ti ti-shopping-cart"></i>
            <span>{{ cartStore.cartItemCount }}</span>
          </a>
        </li>
        <li>
          <a class="search icon" @click="stateStoreInstance.searchModal">
            <i class="ti ti-search"></i>
          </a>
        </li>
        <li class="d-xl-none">
          <RouterLink to="/register" class="search icon">
            <i class="ti ti-user"></i>
          </RouterLink>
        </li>
        <li class="d-none d-xl-block">
          <RouterLink to="/register" class="btn active">
            <span class="border-style">Register Now</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import stateStore from "@/utils/store";
import { useCartStore } from "@/store/index";

export default defineComponent({
  name: "NavbarOne",
  setup() {
    const isSticky = ref(false);
    const stateStoreInstance = stateStore;
    const cartStore = useCartStore();

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
      cartStore,
    };
  },
});
</script>
