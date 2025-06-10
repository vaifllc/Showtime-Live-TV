<template>
  <div class="banner-area bg-black overflow-hidden position-relative z-1">
    <div class="container mw-1780">
      <div class="row">
        <div class="col-lg-5">
          <div
            class="banner-content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h1>Fastest & Most Reliable Internet For Your Home & Businesses</h1>
            <p>
              From Allegiant Stadium to your house, when the game is on the
              line, Nestor helps everyone enjoy a winning experience.
            </p>
            <h6>
              Get 200 Mbps internet — $35/mo for 1 year, no contract required
            </h6>
            <div
              class="banner-btn d-flex align-items-center justify-content-md-center justify-content-lg-start"
            >
              <RouterLink to="/products" class="btn">
                <span class="border-style">Shop Now</span>
              </RouterLink>
              <RouterLink to="/pricing-plan" class="read-more">
                See Pricing & Other Info
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="banner-img-wrap text-start">
            <div class="row g-0">
              <div
                class="col-lg-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div class="banner-img banner-img-one">
                  <img
                    src="@/assets/images/banner-img-1.jpg"
                    alt="banner-img"
                  />
                </div>

                <div class="banner-img banner-img-two">
                  <img
                    src="@/assets/images/banner-img-3.jpg"
                    alt="banner-img"
                  />
                </div>
              </div>
              <div
                class="col-lg-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div class="banner-img banner-img-three">
                  <img
                    src="@/assets/images/banner-img-2.jpg"
                    alt="banner-img"
                  />
                </div>

                <div class="banner-img banner-img-four">
                  <img
                    src="@/assets/images/banner-img-4.jpg"
                    alt="banner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/shape-1.png" class="shape shape-1" alt="shape" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainBanner",
});
</script>
