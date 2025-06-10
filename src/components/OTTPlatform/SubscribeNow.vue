<template>
  <div class="ott-overview-area">
    <div class="container">
      <div
        class="ott-overview-inner"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <div class="row justify-content-center align-items-center">
          <div
            class="col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="ott-overview-content">
              <h2 class="text-white">Start Your Free Trial Today</h2>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="ott-overview-btn">
              <RouterLink to="/pricing-plan" class="btn">
                <span class="border-style">Subscribe Now</span>
              </RouterLink>
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
  name: "SubscribeNow",
  data() {
    return {
      bgImage: require("@/assets/images/ott-platform/overview.jpg"),
    };
  },
});
</script>
