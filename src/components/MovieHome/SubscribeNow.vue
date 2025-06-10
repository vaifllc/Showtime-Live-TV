<template>
  <div class="movies-overview-area">
    <div class="container">
      <div
        class="movies-overview-inner"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <div class="movies-overview-content">
          <h2 class="text-white">Start Your Free Trial Today</h2>
          <RouterLink to="/pricing-plan" class="btn">
            <span class="border-style">Subscribe Now</span>
          </RouterLink>
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
      backgroundImage: require("@/assets/images/movie-home/overview-bg.jpg"),
    };
  },
});
</script>
