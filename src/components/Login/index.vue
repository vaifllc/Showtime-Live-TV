<template>
  <div class="authentication-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="authentication-form">
            <h2>Login</h2>

            <form @submit.prevent="handleLogin">
              <div v-if="error" class="alert alert-danger mb-4">
                {{ error }}
              </div>

              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput2"
                  placeholder="Email"
                  v-model="email"
                  required
                />
                <label for="floatingInput2" class="floating">Email</label>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput1"
                  placeholder="Password"
                  v-model="password"
                  required
                />
                <label for="floatingInput1" class="floating">Password</label>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mb-4 flex-wrap"
              >
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    v-model="rememberMe"
                  />
                  <label
                    class="form-check-label position-relative tops-2"
                    for="flexCheckDefault"
                  >
                    Remember Me
                  </label>
                </div>
                <RouterLink to="/forgot-password" class="forgot mt-2 mt-sm-0">
                  FORGOT PASSWORD?
                </RouterLink>
              </div>
              <div class="text-center">
                <button type="submit" class="btn px-275" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  <span class="border-style">{{ loading ? 'Logging in...' : 'Login Now' }}</span>
                </button>
              </div>
              <div class="py-4 text-center">
                Don't have an account? <RouterLink to="/login-register" class="text-primary">Register</RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { signInUser } from "@/firebase/auth";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const loading = ref(false);
    const error = ref("");
    const router = useRouter();

    const handleLogin = async () => {
      if (!email.value || !password.value) {
        error.value = "Please enter both email and password";
        return;
      }

      loading.value = true;
      error.value = "";

      try {
        await signInUser(email.value, password.value);

        // If remember me is checked, save email to localStorage
        if (rememberMe.value) {
          localStorage.setItem("rememberedEmail", email.value);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        // Redirect to home page after successful login
        router.push("/");
      } catch (err: any) {
        error.value = err.message || "Failed to login";
      } finally {
        loading.value = false;
      }
    };

    // Check if there's a remembered email
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      email.value = rememberedEmail;
      rememberMe.value = true;
    }

    return {
      email,
      password,
      rememberMe,
      loading,
      error,
      handleLogin
    };
  }
});
</script>
