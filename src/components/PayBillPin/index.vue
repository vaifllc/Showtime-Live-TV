<template>
  <div class="authentication-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="authentication-form">
            <div class="text-center mb-4 pb-2">
              <h2 class="mb-1">Enter Pin Code</h2>
              <p>
                In an era where our daily lives are intricately woven into the
                digital fabric, the importance of a reliable and high-performing
                Internet Service Provider (ISP) cannot be overstated.
              </p>
            </div>

            <div id="banners-three-area">
              <form id="otp-form">
                <div
                  class="d-flex text-center justify-content-between gap-3 mb-4 pb-2"
                >
                  <input
                    type="text"
                    class="form-control text-center bg-white fs-2"
                  />
                  <input
                    type="text"
                    class="form-control text-center bg-white fs-2"
                  />
                  <input
                    type="text"
                    class="form-control text-center bg-white fs-2"
                  />
                  <input
                    type="text"
                    class="form-control text-center bg-white fs-2"
                  />
                </div>

                <div class="text-center">
                  <button type="submit" class="btn px-275">
                    <span class="border-style">Pay Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PayBillPin",
});
</script>
