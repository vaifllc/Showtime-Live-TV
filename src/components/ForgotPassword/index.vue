<template>
  <div class="authentication-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="authentication-form">
            <h2>Forgot Password</h2>

            <form>
              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput5"
                  placeholder="Email"
                />
                <label for="floatingInput5" class="floating">Email</label>
              </div>

              <div class="text-center">
                <button type="submit" class="btn px-275">
                  <span class="border-style">Forgot Password</span>
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
  name: "ForgotPassword",
});
</script>
