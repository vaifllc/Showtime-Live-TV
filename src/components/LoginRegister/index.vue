<template>
  <div class="auth-form-card">
    <div v-if="isAuthenticated()" class="simple-user-menu">
      <div class="user-info">
        <span>Welcome, {{ displayName() }}</span>
        <i class="ri-arrow-down-s-line"></i>

        <!-- Simple dropdown that shows on hover -->
        <div class="simple-dropdown">
          <a href="#" class="simple-dropdown-item" @click.prevent="handleLogout">
            <i class="ri-logout-box-line"></i> Logout
          </a>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="auth-tabs">
        <button :class="['auth-tab', { active: activeTab === 'login' }]" @click="activeTab = 'login'">Login</button>
        <button :class="['auth-tab', { active: activeTab === 'register' }]" @click="activeTab = 'register'">Register</button>
      </div>
      <div v-if="activeTab === 'login'" class="auth-form-panel">
        <h2 class="auth-title">Sign In to Your Account</h2>
        <form @submit.prevent="handleLogin" class="auth-form">
          <div class="form-group">
            <label for="login-email">Email</label>
            <div class="input-group" :class="{ 'has-error': validationErrors.email }">
              <span class="input-group-text">
                <i class="ri-mail-line"></i>
              </span>
              <input
                id="login-email"
                type="email"
                class="form-control"
                v-model="loginForm.email"
                placeholder="Enter your email"
                :class="{ 'input-error': validationErrors.email }"
                @focus="validationErrors.email = ''"
                @input="validateEmail"
                required
              />
            </div>
            <div v-if="validationErrors.email" class="error-text">{{ validationErrors.email }}</div>
          </div>

          <div class="form-group mb-4">
            <label for="login-password">Password</label>
            <div class="input-group" :class="{ 'has-error': validationErrors.password }">
              <span class="input-group-text">
                <i class="ri-lock-line"></i>
              </span>
              <input
                id="login-password"
                :type="showLoginPassword ? 'text' : 'password'"
                class="form-control"
                v-model="loginForm.password"
                placeholder="Enter your password"
                :class="{ 'input-error': validationErrors.password }"
                @focus="validationErrors.password = ''"
                required
              />
              <button
                type="button"
                class="btn show-password-btn"
                @click="showLoginPassword = !showLoginPassword"
              >
                <i :class="showLoginPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
              </button>
            </div>
            <div v-if="validationErrors.password" class="error-text">{{ validationErrors.password }}</div>
          </div>

          <div class="form-footer">
            <label class="remember-me">
              <input type="checkbox" v-model="loginForm.rememberMe" />
              Remember me
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>

          <div v-if="loginError" class="auth-error-message">
            <i class="ri-error-warning-line"></i>
            <span>{{ loginError }}</span>
          </div>

          <button type="submit" class="auth-btn" :disabled="loginLoading">
            <span v-if="loginLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ loginLoading ? 'Signing In...' : 'Sign In' }}
          </button>
        </form>
      </div>
      <div v-else class="auth-form-panel">
        <h2 class="auth-title">Create a New Account</h2>
        <form @submit.prevent="handleRegister">
          <div v-if="registerError" class="auth-alert">
            {{ registerError }}
          </div>
          <div class="auth-input-group">
            <span class="auth-input-icon"><i class="ri-user-line"></i></span>
            <input
              type="text"
              class="auth-input"
              placeholder="Full Name"
              v-model="registerForm.fullName"
              required
              autocomplete="name"
            />
          </div>
          <div class="auth-input-group">
            <span class="auth-input-icon"><i class="ri-mail-line"></i></span>
            <input
              type="email"
              class="auth-input"
              placeholder="Email"
              v-model="registerForm.email"
              required
              autocomplete="email"
            />
          </div>
          <div class="auth-input-group">
            <span class="auth-input-icon"><i class="ri-lock-2-line"></i></span>
            <input
              :type="showRegisterPassword ? 'text' : 'password'"
              class="auth-input"
              placeholder="Password (min 6 characters)"
              v-model="registerForm.password"
              required
              minlength="6"
              autocomplete="new-password"
            />
            <span class="auth-input-icon auth-input-action" @click="showRegisterPassword = !showRegisterPassword">
              <i :class="showRegisterPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
            </span>
          </div>
          <div class="auth-input-group">
            <span class="auth-input-icon"><i class="ri-map-pin-line"></i></span>
            <div v-for="(address, idx) in registerForm.addresses" :key="idx" class="address-card">
              <div class="address-header">
                <select v-model="address.type" class="auth-input address-type">
                  <option value="home">Home</option>
                  <option value="billing">Billing</option>
                  <option value="shipping">Shipping</option>
                  <option value="other">Other</option>
                </select>
                <button type="button" class="auth-btn danger small" @click="removeAddress(idx)">Remove</button>
              </div>
              <div class="address-fields">
                <input type="text" class="auth-input" placeholder="Street" v-model="address.street" required autocomplete="street-address" />
                <input type="text" class="auth-input" placeholder="City" v-model="address.city" required autocomplete="address-level2" />
                <input type="text" class="auth-input" placeholder="State" v-model="address.state" autocomplete="address-level1" />
                <input type="text" class="auth-input" placeholder="ZIP" v-model="address.zip" autocomplete="postal-code" />
                <input type="text" class="auth-input" placeholder="Country" v-model="address.country" required autocomplete="country" />
              </div>
            </div>
            <button type="button" class="auth-btn" @click="addAddress">Add Address</button>
          </div>
          <div class="auth-input-group">
            <span class="auth-input-icon"><i class="ri-phone-line"></i></span>
            <input
              type="tel"
              class="auth-input"
              placeholder="Phone Number"
              v-model="registerForm.phone"
              autocomplete="tel"
            />
          </div>
          <label class="auth-checkbox">
            <input type="checkbox" v-model="registerForm.termsAccepted" required />
            I accept all terms & conditions
          </label>
          <button type="submit" class="auth-btn" :disabled="registerLoading">
            <span v-if="registerLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ registerLoading ? 'Registering...' : 'Register Now' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import { signInUser, registerUser, signOutUser } from "@/firebase/auth";
import { useAuth } from "@/composables/useAuth";
import { useAlerts } from "@/components/Common/AlertSystem.vue";

export default defineComponent({
  name: "LoginRegister",
  setup() {
    const router = useRouter();
    const activeTab = ref<'login' | 'register'>('login');
    const showLoginPassword = ref(false);
    const showRegisterPassword = ref(false);
    const { showAlert } = useAlerts();

    // Validation errors
    const validationErrors = reactive({
      email: '',
      password: ''
    });

    // Login form state
    const loginForm = reactive({
      email: "",
      password: "",
      rememberMe: false
    });
    const loginLoading = ref(false);
    const loginError = ref("");

    // Register form state
    const registerForm = reactive({
      fullName: "",
      email: "",
      password: "",
      addresses: [
        { type: "home", street: "", city: "", state: "", zip: "", country: "" }
      ],
      country: "",
      phone: "",
      termsAccepted: false,
      admin: false
    });
    const registerLoading = ref(false);
    const registerError = ref("");

    const { isAuthenticated, displayName } = useAuth();

    // Validate email in real-time
    const validateEmail = () => {
      if (!loginForm.email) {
        validationErrors.email = 'Email is required';
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(loginForm.email)) {
        validationErrors.email = 'Please enter a valid email address';
        return false;
      }

      validationErrors.email = '';
      return true;
    };

    // Validate password in real-time
    const validatePassword = () => {
      if (!loginForm.password) {
        validationErrors.password = 'Password is required';
        return false;
      }

      validationErrors.password = '';
      return true;
    };

    // Watch for changes in login form
    watch(() => loginForm.email, validateEmail);
    watch(() => loginForm.password, validatePassword);

    // Handle login
    const handleLogin = async () => {
      // Validate form fields
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

      if (!isEmailValid || !isPasswordValid) {
        return;
      }

      loginLoading.value = true;
      loginError.value = "";

      try {
        await signInUser(loginForm.email, loginForm.password);

        // If remember me is checked, save email to localStorage
        if (loginForm.rememberMe) {
          localStorage.setItem("rememberedEmail", loginForm.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        // Show success alert
        showAlert({
          title: "Login Successful",
          message: "Welcome back! You are now logged in.",
          type: "success"
        });

        // Redirect to home page after successful login
        router.push("/");
      } catch (err: any) {
        // Extract meaningful error message
        let errorMessage = "Failed to login. Please try again.";

        if (err.message.includes("user-not-found")) {
          errorMessage = "Email not found. Please check your email or register.";
        } else if (err.message.includes("wrong-password")) {
          errorMessage = "Incorrect password. Please try again.";
        } else if (err.message.includes("too-many-requests")) {
          errorMessage = "Too many failed attempts. Please try again later.";
        } else if (err.message.includes("invalid-email")) {
          errorMessage = "Invalid email format. Please enter a valid email.";
        }

        loginError.value = errorMessage;

        // Show error alert
        showAlert({
          title: "Login Failed",
          message: errorMessage,
          type: "error"
        });
      } finally {
        loginLoading.value = false;
      }
    };

    // Handle registration
    const handleRegister = async () => {
      // Validate required fields
      if (!registerForm.fullName || !registerForm.email || !registerForm.password) {
        registerError.value = "Please fill in all required fields";
        showAlert({
          message: "Please fill in all required fields",
          type: "warning"
        });
        return;
      }

      // Validate password length
      if (registerForm.password.length < 6) {
        registerError.value = "Password must be at least 6 characters";
        showAlert({
          message: "Password must be at least 6 characters",
          type: "warning"
        });
        return;
      }

      // Validate terms acceptance
      if (!registerForm.termsAccepted) {
        registerError.value = "You must accept the terms and conditions";
        showAlert({
          message: "You must accept the terms and conditions",
          type: "warning"
        });
        return;
      }

      // Validate at least one address
      if (!registerForm.addresses.length || !registerForm.addresses[0].street) {
        registerError.value = "Please provide at least one address";
        showAlert({
          message: "Please provide at least one address",
          type: "warning"
        });
        return;
      }

      registerLoading.value = true;
      registerError.value = "";

      try {
        await registerUser(
          registerForm.email,
          registerForm.password,
          {
            fullName: registerForm.fullName,
            addresses: registerForm.addresses,
            country: registerForm.country,
            phone: registerForm.phone,
            admin: false
          }
        );

        // Show success alert
        showAlert({
          title: "Registration Successful",
          message: "Your account has been created successfully. You can now log in.",
          type: "success",
          timeout: 7000
        });

        // Switch to login tab
        activeTab.value = 'login';

        // Clear registration form
        registerForm.fullName = "";
        registerForm.email = "";
        registerForm.password = "";
        registerForm.addresses = [{ type: "home", street: "", city: "", state: "", zip: "", country: "" }];
        registerForm.country = "";
        registerForm.phone = "";
        registerForm.termsAccepted = false;
      } catch (err: any) {
        // Extract meaningful error message
        let errorMessage = "Failed to register. Please try again.";

        if (err.message.includes("email-already-in-use")) {
          errorMessage = "This email is already registered. Please use a different email or login.";
        } else if (err.message.includes("invalid-email")) {
          errorMessage = "Invalid email format. Please enter a valid email.";
        } else if (err.message.includes("weak-password")) {
          errorMessage = "Password is too weak. Please use a stronger password.";
        }

        registerError.value = errorMessage;

        // Show error alert
        showAlert({
          title: "Registration Failed",
          message: errorMessage,
          type: "error"
        });
      } finally {
        registerLoading.value = false;
      }
    };

    // Check if there's a remembered email
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      loginForm.email = rememberedEmail;
      loginForm.rememberMe = true;
    }

    const addAddress = () => {
      registerForm.addresses.push({ type: "home", street: "", city: "", state: "", zip: "", country: "" });
    };

    const removeAddress = (idx: number) => {
      if (registerForm.addresses.length > 1) {
        registerForm.addresses.splice(idx, 1);
      }
    };

    const handleLogout = async () => {
      try {
        await signOutUser();

        // Show success alert
        showAlert({
          title: "Logout Successful",
          message: "You have been logged out successfully.",
          type: "success"
        });

        window.location.reload();
      } catch (error) {
        console.error("Logout failed:", error);

        // Show error alert
        showAlert({
          title: "Logout Failed",
          message: "Failed to logout. Please try again.",
          type: "error"
        });
      }
    };

    return {
      activeTab,
      showLoginPassword,
      showRegisterPassword,
      loginForm,
      loginLoading,
      loginError,
      validationErrors,
      validateEmail,
      validatePassword,
      handleLogin,
      registerForm,
      registerLoading,
      registerError,
      handleRegister,
      addAddress,
      removeAddress,
      isAuthenticated,
      displayName,
      handleLogout
    };
  }
});
</script>

<style scoped>
/* Add styles for the enhanced login form */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--light-color);
}

.input-group {
  display: flex;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid var(--light-alpha-20);
}

.input-group.has-error {
  border-color: var(--error-color, #ff5252);
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: var(--light-alpha-10);
  color: var(--light-color);
}

.form-control {
  flex: 1;
  padding: 12px 15px;
  background-color: transparent;
  border: none;
  color: var(--light-color);
  font-size: 15px;
  outline: none;
}

.form-control::placeholder {
  color: var(--light-alpha-50);
}

.form-control.input-error {
  border-color: var(--error-color, #ff5252);
}

.error-text {
  color: var(--error-color, #ff5252);
  font-size: 13px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.show-password-btn {
  background: transparent;
  border: none;
  color: var(--light-alpha-70);
  cursor: pointer;
  padding: 0 15px;
  transition: color 0.3s ease;
}

.show-password-btn:hover {
  color: var(--light-color);
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--light-alpha-70);
  font-size: 14px;
}

.forgot-link {
  color: var(--primary);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: var(--light-color);
}

.auth-error-message {
  background-color: rgba(255, 82, 82, 0.15);
  border-left: 3px solid var(--error-color, #ff5252);
  color: var(--light-color);
  padding: 12px 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.auth-error-message i {
  color: var(--error-color, #ff5252);
  font-size: 18px;
  margin-top: 2px;
}

.auth-btn {
  display: block;
  width: 100%;
  padding: 14px;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-btn:hover {
  background-color: var(--primary-dark);
}

.auth-btn:disabled {
  background-color: var(--light-alpha-30);
  cursor: not-allowed;
}

/* Variables for error states */
:root {
  --error-color: #ff5252;
  --primary-dark: #e04e4e;
}

/* Original styles */
.auth-form-card {
  background: var(--gondola2);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(34, 21, 22, 0.18);
  padding: 2.5rem 2rem 2rem 2rem;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px solid var(--primary);
}

/* User dropdown styles */
.simple-user-menu {
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: var(--primary);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}

.simple-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background-color: var(--gondola);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.user-info:hover .simple-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.simple-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  color: var(--light-color);
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.simple-dropdown-item:hover {
  background-color: var(--light-alpha-10);
}

.auth-tabs {
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
}
.auth-tab {
  flex: 1;
  padding: 0.75rem 0;
  background: none;
  border: none;
  border-bottom: 2px solid var(--gondola);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--gray1);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}
.auth-tab.active {
  color: var(--primarydiv);
  border-bottom: 2.5px solid var(--primarydiv);
  background: none;
}
.auth-form-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1.5rem;
  text-align: center;
}
.auth-input-group {
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
}
.auth-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.5rem;
  border-radius: 8px;
  border: 1.5px solid var(--gondola);
  font-size: 1rem;
  background: var(--gondola);
  color: var(--white);
  outline: none;
  transition: border-color 0.2s, background 0.2s;
}
.auth-input:focus {
  border-color: var(--primarydiv);
  background: var(--gondola2);
}
.auth-input-icon {
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primarydiv);
  font-size: 1.2rem;
  pointer-events: none;
}
.auth-input-action {
  right: 0.9rem;
  left: auto;
  cursor: pointer;
  pointer-events: auto;
  color: var(--primarydiv);
}
.auth-row {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}
.auth-row-between {
  justify-content: space-between;
}
.auth-checkbox {
  display: flex;
  align-items: center;
  font-size: 0.98rem;
  color: var(--gray1);
  margin-bottom: 1.2rem;
  cursor: pointer;
}
.auth-checkbox input[type="checkbox"] {
  margin-right: 0.5rem;
}
.auth-btn {
  width: 100%;
  padding: 0.85rem 0;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primarydiv) 100%);
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(201, 14, 14, 0.08);
  margin-top: 0.5rem;
  transition: background 0.2s, box-shadow 0.2s;
}
.auth-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.auth-btn:hover:not(:disabled) {
  background: linear-gradient(90deg, var(--primarydiv) 0%, var(--primary) 100%);
  box-shadow: 0 4px 16px rgba(201, 14, 14, 0.13);
}
.auth-link {
  color: var(--primarydiv);
  font-size: 0.98rem;
  text-decoration: none;
  transition: color 0.2s;
}
.auth-link:hover {
  color: var(--white);
  text-decoration: underline;
}
.auth-alert {
  width: 100%;
  background: var(--gondola);
  color: var(--primarydiv);
  border-radius: 6px;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
  border: 1.5px solid var(--primarydiv);
}
@media (max-width: 600px) {
  .auth-form-card {
    padding: 1.2rem;
    max-width: 100%;
  }
  .auth-tabs {
    font-size: 1rem;
  }
}

.address-card {
  background: var(--gondola2);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(34, 21, 22, 0.08);
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1.5px solid var(--primary);
}
.address-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.address-type {
  max-width: 140px;
  margin-right: 1rem;
}
.auth-btn.small {
  padding: 0.3rem 0.7rem;
  font-size: 0.95rem;
}
.address-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
.address-fields .auth-input {
  flex: 1 1 120px;
  min-width: 0;
}
</style>
