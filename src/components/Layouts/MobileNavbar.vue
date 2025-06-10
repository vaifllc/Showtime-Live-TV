<template>
  <div
    :class="[
      'mobile-navbar offcanvas offcanvas-end border-0',
      { show: stateStoreInstance.navbar },
    ]"
  >
    <div class="offcanvas-header">
      <RouterLink to="/" class="logo d-inline-block">
        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">ShowTime Live TV</h1>
      </RouterLink>
      <RouterLink to="/" class="logo d-none">
        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">ShowTime Live TV</h1>
      </RouterLink>

      <button
        type="button"
        class="close-btn bg-transparent position-relative lh-1 p-0 border-0"
        @click="stateStoreInstance.responsiveNavbar"
      >
        <i class="ri-close-fill"></i>
      </button>
    </div>

    <div class="offcanvas-body">
      <ul class="mobile-menu">
        <li class="mobile-menu-list without-icon">
          <RouterLink to="/" class="menu-link">
            Home
          </RouterLink>
        </li>

        <li class="mobile-menu-list without-icon">
          <RouterLink to="/pricing-plan" class="menu-link">
            Subscription
          </RouterLink>
        </li>

        <li class="mobile-menu-list without-icon">
          <RouterLink to="/setup-guide" class="menu-link">
            Setup Guide
          </RouterLink>
        </li>

        <li class="mobile-menu-list without-icon">
          <RouterLink to="/reseller" class="menu-link">
            Reseller
          </RouterLink>
        </li>

        <li class="mobile-menu-list without-icon">
          <RouterLink to="/contact-us" class="menu-link">
            Contact
          </RouterLink>
        </li>

        <!-- Temporarily commented out menu items
        <li :class="['mobile-menu-list', { active: isActive('services') }]">
          <a
            class="menu-link menu-toggle active"
            @click="toggleMenu('services')"
          >
            Services
          </a>

          <ul class="mobile-menu-items" v-show="isActive('services')">
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

        <li :class="['mobile-menu-list', { active: isActive('pages') }]">
          <a class="menu-link menu-toggle active" @click="toggleMenu('pages')">
            Pages
          </a>

          <ul class="mobile-menu-items" v-show="isActive('pages')">
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

        <li :class="['mobile-menu-list', { active: isActive('shop') }]">
          <a class="menu-link menu-toggle active" @click="toggleMenu('shop')">
            Shop
          </a>

          <ul class="mobile-menu-items" v-show="isActive('shop')">
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

        <li :class="['mobile-menu-list', { active: isActive('blog') }]">
          <a class="menu-link menu-toggle active" @click="toggleMenu('blog')">
            Blog
          </a>

          <ul class="mobile-menu-items" v-show="isActive('blog')">
            <li>
              <RouterLink class="dropdown-item" to="/blog"> Blog </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/blog-details">
                Blog Details
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/tags"> Tags </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/categories">
                Categories
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/author">
                Author
              </RouterLink>
            </li>
          </ul>
        </li>

        <li
          :class="['mobile-menu-list', { active: isActive('authentication') }]"
        >
          <a
            class="menu-link menu-toggle active"
            @click="toggleMenu('authentication')"
          >
            Authentication
          </a>

          <ul class="mobile-menu-items" v-show="isActive('authentication')">
            <li>
              <RouterLink class="dropdown-item" to="/login-register">
                Login / Register
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/login"> Login </RouterLink>
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

        <li class="mobile-menu-list without-icon">
          <RouterLink to="/pricing-plan" class="nav-link">
            Pricing Plan
          </RouterLink>
        </li>

        <li class="mobile-menu-list without-icon">
          <RouterLink to="/contact-us" class="nav-link">
            Contact Us
          </RouterLink>
        </li>
        -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "MobileNavbar",
  setup() {
    const stateStoreInstance = stateStore;

    const openMenu = ref<string | null>(null);

    const toggleMenu = (menu: string | null) => {
      openMenu.value = openMenu.value === menu ? null : menu;
    };

    const isActive = (menu: string | null) => {
      return openMenu.value === menu;
    };

    return {
      stateStoreInstance,
      toggleMenu,
      isActive,
    };
  },
});
</script>
