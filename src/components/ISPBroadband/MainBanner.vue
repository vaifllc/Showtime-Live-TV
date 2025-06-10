<template>
  <div class="banner-three-area">
    <div class="container mw-1685">
      <div class="position-relative z-1">
        <div
          class="banner-content-three"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <span class="top-title">NESTOR ISP BROADBAND WITH STREAMING</span>
          <h2>The first internet provider you'll actually like.</h2>
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

        <div class="banner-shape banner-shape-1">
          <img src="@/assets/images/banner-shape-1.png" alt="banner-shape" />
          <img
            src="@/assets/images/shape-11.png"
            class="shape-11"
            alt="shape-11"
          />
          <img
            src="@/assets/images/shape-13.png"
            class="shape-13"
            alt="shape-13"
          />
        </div>
        <div class="banner-shape banner-shape-2">
          <img src="@/assets/images/banner-shape-2.png" alt="banner-shape" />
          <img
            src="@/assets/images/shape-12.png"
            class="shape-12"
            alt="shape-12"
          />
        </div>
        <img
          src="@/assets/images/banner-shape-3.png"
          class="banner-shape banner-shape-3"
          alt="banner-shape"
        />
        <div class="banner-shape banner-shape-4">
          <img src="@/assets/images/banner-shape-4.png" alt="banner-shape" />
          <img
            src="@/assets/images/shape-13.png"
            class="shape-13"
            alt="shape-13"
          />
        </div>
      </div>
    </div>

    <img
      src="@/assets/images/shape-14.png"
      class="shape-14 shape"
      alt="shape-14"
    />
    <img
      src="@/assets/images/shape-14.png"
      class="shape-15 shape"
      alt="shape-14"
    />
    <img
      src="@/assets/images/shape-14.png"
      class="shape-16 shape"
      alt="shape-14"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainBanner",
});
</script>
