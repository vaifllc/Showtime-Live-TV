<template>
  <nav
    :class="[
      'navbar navbar-expand-lg bg-transparent p-0 fixed-top mt-20',
      { sticky: isSticky },
    ]"
  >
    <div class="container mw-1720 bg-opacity px-50 position-relative">
      <RouterLink class="navbar-brand" to="/">
        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">ShowTime Live TV</h1>
      </RouterLink>
      <a
        class="navbar-toggler"
        role="button"
        @click="stateStoreInstance.responsiveNavbar"
      >
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/"
            >
              Home
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/pricing-plan">
              Subscription
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/setup-guide">
              Setup Guide
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/reseller">
              Reseller
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/contact-us">
              Contact
            </RouterLink>
          </li>

          <li class="nav-item" v-if="isAuthenticated() && userProfile.admin === true">
            <RouterLink class="nav-link" to="/admin/products">
              Admin
            </RouterLink>
          </li>

          <!-- Temporarily commented out links
          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/channel-list">
              Channel List
            </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/faq"> FAQ </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/about-us"> About Us </RouterLink>
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
                <a
                  class="dropdown-item sub-dropdown dropdown-toggle"
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
              <li>
                <a
                  class="dropdown-item sub-dropdown dropdown-toggle"
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
                    <RouterLink class="dropdown-item" to="/cart">
                      Cart
                    </RouterLink>
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
            <RouterLink class="nav-link" to="/contact-us"> Contact </RouterLink>
          </li>
          -->
        </ul>
      </div>

      <ul
        class="d-flex ps-0 mb-0 list-unstyled justify-content-end align-items-center others-options"
      >
        <!-- <li class="d-none d-sm-inline-block">
          <a href="tel:125487568" class="call icon">
            <i class="ti ti-phone-incoming"></i>
          </a>
        </li> -->
        <!-- <li>
          <a class="cart icon" @click="stateStoreInstance.cartModal">
            <i class="ti ti-shopping-cart"></i>
            <span>{{ cartStore.cartItemCount }}</span>
          </a>
        </li>
        <li>
          <a class="search icon" @click="stateStoreInstance.searchModal">
            <i class="ti ti-search"></i>
          </a>
        </li> -->

        <!-- User not logged in -->
        <li v-if="!isAuthenticated()">
          <RouterLink to="/login-register" class="btn btn-sm btn-dark-outline">
            <span class="border-style">Sign In</span>
          </RouterLink>
        </li>

        <!-- User logged in -->
        <li v-else class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle user-dropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="welcome-text me-1">Welcome,</span>
            <span class="user-name">{{ displayName() }}</span>
          </a>

          <ul class="dropdown-menu user-menu">
            <li>
              <span class="dropdown-item user-email">{{ userProfile.email }}</span>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <RouterLink class="dropdown-item" to="/account">
                <i class="ti ti-user me-2"></i> My Account
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/orders">
                <i class="ti ti-list me-2"></i> My Subscriptions
              </RouterLink>
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/change-password">
                <i class="ti ti-lock me-2"></i> Change Password
              </RouterLink>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <a href="#" class="dropdown-item" @click.prevent="handleLogout">
                <i class="ti ti-logout me-2"></i> Sign Out
              </a>
            </li>
          </ul>
        </li>

        <!-- Direct Logout Button -->
        <li v-if="isAuthenticated()" class="ms-2">
          <a href="#" class="btn btn-sm btn-danger" @click.prevent="handleLogout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import stateStore from "@/utils/store";
import { useCartStore } from "@/store/index";
import { useAuth } from "@/composables/useAuth";
import { signOutUser } from "@/firebase/auth";
import { useRouter } from "vue-router";
import { useAlerts } from "@/components/Common/AlertSystem.vue";

// Add a declaration for the Bootstrap global
declare global {
  interface Window {
    bootstrap: any;
  }
}

export default defineComponent({
  name: "NavbarTwo",
  setup() {
    const stateStoreInstance = stateStore;
    const cartStore = useCartStore();
    const isSticky = ref(false);
    const router = useRouter();
    const { isAuthenticated, displayName, userProfile, userEmail, isAdmin } = useAuth();
    const { showAlert } = useAlerts();

    // Added computed properties for better reactive state
    const isUserLoggedIn = computed(() => isAuthenticated());
    const username = computed(() => displayName());
    const email = computed(() => userEmail());
    const userIsAdmin = computed(() => isAdmin());

    onMounted(() => {
      window.addEventListener("scroll", () => {
        isSticky.value = window.scrollY > 50;
      });

      // Initialize Bootstrap dropdowns
      if (typeof window !== 'undefined' && window.bootstrap) {
        const dropdownElements = document.querySelectorAll('.dropdown-toggle');
        dropdownElements.forEach(element => {
          new window.bootstrap.Dropdown(element);
        });
      }
    });

    const handleLogout = async () => {
      try {
        await signOutUser();

        // Show success notification
        showAlert({
          title: "Logout Successful",
          message: "You have been logged out successfully.",
          type: "success"
        });

        // Navigate to home
        router.push("/");

        // Reload page to reset application state
        window.location.reload();
      } catch (error) {
        console.error("Logout failed:", error);

        // Show error notification
        showAlert({
          title: "Logout Failed",
          message: "Failed to logout. Please try again.",
          type: "error"
        });
      }
    };

    return {
      isSticky,
      stateStoreInstance,
      cartStore,
      isAuthenticated,
      isUserLoggedIn,
      displayName,
      userProfile,
      username,
      email,
      userIsAdmin,
      handleLogout
    };
  },
});
</script>

<style scoped>
/* Mobile menu styles */
.offcanvas {
  background-color: var(--gondola);
  max-width: 300px;
}

.offcanvas-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.offcanvas-body .nav-link {
  color: white;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 16px;
}

.offcanvas-body .nav-link:hover {
  color: var(--primary);
}

.btn-close {
  filter: invert(1);
}

.user-dropdown {
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: white;
  font-weight: 500;
}

.user-dropdown:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.welcome-text {
  font-size: 14px;
  opacity: 0.8;
}

.user-name {
  font-weight: 600;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}

.user-menu {
  min-width: 220px;
  padding: 10px 0;
}

.user-email {
  font-size: 14px;
  color: #888;
  cursor: default;
  text-align: center;
  margin: 5px 0;
}

.dropdown-item i {
  width: 20px;
  text-align: center;
}

.btn-dark-outline {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: transparent;
  transition: all 0.3s ease;
}

.btn-dark-outline:hover {
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-danger {
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-danger:hover {
  background-color: var(--primarydiv);
  border-color: var(--primarydiv);
}
</style>
