<template>
  <div class="enjoy-area pt-100">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="enjoy-img">
            <img src="@/assets/images/enjoy.png" alt="enjoy" />
          </div>
        </div>

        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="enjoy-content">
            <span class="top-title">ENJOY</span>
            <h2>Enjoy sports, movies, TV shows & more</h2>
            <p>
              With our large and comprehensive collection of TV channels, never
              miss your favorite sports games and TV shows.
            </p>
            <h4>Subscribe Nestor TV Box & Get Free Wi-Fi For 1 Month</h4>
            <div class="row align-items-center mb-30">
              <div class="col-lg-4 col-sm-6">
                <div class="starting-form mb-sm-0">
                  <span>STARTING FROM</span>
                  <h1>$ 49.99<sub>/ Mo</sub></h1>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="nestor-prepaid">
                  <span>Nestor prepaid internet</span>
                  <h3>Only pay for the internet you need</h3>
                  <RouterLink
                    to="/about-us"
                    class="read-more style-two text-grey-teal"
                  >
                    Learn More
                    <i class="ti ti-arrow-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
            <RouterLink to="/pricing-plan" class="btn bg-grey-teal">
              <span class="border-style">View All Pricing Plan</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EnjoySports",
});
</script>
