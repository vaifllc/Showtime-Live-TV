<template>
  <div class="authentication-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="authentication-form">
            <div class="text-center mb-4">
              <h2 class="mb-1">Enter your phone no</h2>
              <p>
                In an era where our daily lives are intricately woven into the
                digital fabric, the importance of a reliable and high-performing
                Internet Service Provider (ISP) cannot be overstated.
              </p>
            </div>

            <form>
              <div class="form-group border d-flex mb-5">
                <input
                  type="text"
                  class="form-control p-0 text-center border-0 border-end"
                  style="width: 60px"
                  placeholder="+00"
                />
                <input type="text" class="form-control border-0" />
              </div>

              <div class="text-center">
                <button type="submit" class="btn px-275">
                  <span class="border-style">Submit Now</span>
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
  name: "PayBill",
});
</script>
