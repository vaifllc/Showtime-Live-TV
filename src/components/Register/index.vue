<template>
  <div class="authentication-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="authentication-form">
            <h2>Register</h2>

            <form>
              <div class="form-floating mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput3"
                  placeholder="Name"
                />
                <label for="floatingInput3" class="floating">Name</label>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput4"
                  placeholder="Email"
                />
                <label for="floatingInput4" class="floating">Email</label>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput5"
                  placeholder="Password"
                />
                <label for="floatingInput5" class="floating">Password</label>
              </div>
              <div class="form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  class="form-check-label position-relative tops-2"
                  for="flexCheckDefault2"
                >
                  I accept all terms & conditions
                </label>
              </div>
              <div class="text-center">
                <button type="submit" class="btn px-275">
                  <span class="border-style">Register Now</span>
                </button>
              </div>
              <div class="py-4 text-center">or</div>
              <div class="text-center">
                <button type="submit" class="btn active px-275">
                  <span class="border-style">Login With Phone Number</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
});
</script>
