<template>
  <div class="authentication-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="authentication-form">
            <h2>Change Password</h2>

            <form>
              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput5"
                  placeholder="Old Password"
                />
                <label for="floatingInput5" class="floating">
                  Old Password
                </label>
              </div>

              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput6"
                  placeholder="New Password"
                />
                <label for="floatingInput6" class="floating">
                  New Password
                </label>
              </div>

              <div class="form-floating mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput7"
                  placeholder="Confirm Password"
                />
                <label for="floatingInput7" class="floating">
                  Confirm Password
                </label>
              </div>

              <div class="text-center">
                <button type="submit" class="btn px-275">
                  <span class="border-style">Change Password</span>
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
  name: "ChangePassword",
});
</script>
