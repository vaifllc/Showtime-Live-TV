<template>
  <div
    class="services-test-area bg-mg ptb-100 position-relative overflow-hidden"
    :style="{ backgroundImage: 'url(' + bgImage + ')' }"
  >
    <div class="container mw-1356">
      <div
        class="services-test-content"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">TESTING</span>
        <h2 class="text-white">
          Start now. Don’t hasitate to test our service
        </h2>
        <p class="text-silver">
          Test account. Get full access to all channels and VOD
        </p>
        <div class="d-flex align-items-center amount">
          <div class="flex-shrink-0">
            <i class="flaticon-tv"></i>
          </div>
          <div class="flex-grow-1 ms-3">
            <h2>$ 14.99<sub>/ month</sub></h2>
            <span>1 Month Test Satisfied Or Refunded.</span>
          </div>
        </div>
        <div class="d-flex gap-2 flex-wrap">
          <RouterLink to="/services" class="btn bg-grey-teal">
            <span class="border-style">Test Now Our Service</span>
          </RouterLink>
          <a href="tel:3212344567" class="btn bg-transparent">
            <span class="border-style">
              <span>Call: +321 234 4567</span> for any enquiry
            </span>
          </a>
        </div>
      </div>
    </div>

    <img src="@/assets/images/shape-9.png" class="shape shape-9" alt="shape" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestOurService",
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bgImage = require("@/assets/images/services-test-bg.jpg");

    return {
      bgImage,
    };
  },
});
</script>
