<template>
  <div class="satellite-internet-banner-area" :style="backgroundImageStyle">
    <div class="container mw-1685">
      <div
        class="satellite-internet-banner-content"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="sub">NESTOR SATELLITE INTERNET PROVIDER</span>
        <h1 class="text-white">WE ARE LEADER IN THE SPACE INTERNET</h1>
        <p>
          From Allegiant Stadium to your house, when the game is on the line,
          Nestor helps everyone enjoy a winning experience.
        </p>
        <form class="check-form position-relative">
          <input
            type="text"
            class="form-control"
            placeholder="Street Addresses & Apartments"
          />
          <button
            type="submit"
            class="btn active position-absolute top-50 end-0 translate-middle-y"
          >
            <span class="border-style">Check Availability</span>
          </button>
        </form>
        <p class="already">
          Already a customer?
          <RouterLink to="/register">Sign in here.</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainBanner",
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${require("@/assets/images/satellite-internet/banner-bg.jpg")})`,
      };
    },
  },
});
</script>
