<template>
  <div class="our-content-area ptb-100 bg-gondola3 position-relative z-1">
    <div class="container mw-1356">
      <div class="row align-items-center">
        <div class="col-lg-6 col-xl-7">
          <div
            class="our-content-img position-relative z-2 text-center text-lg-end"
          >
            <img
              src="@/assets/images/our-content.f3dc30e4.png"
              alt="our-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            />
            <img
              src="@/assets/images/shape-5.png"
              class="shape shape-5 z-1"
              alt="shape"
            />
          </div>
        </div>
        <div
          class="col-lg-6 col-xl-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="our-content position-relative z-1">
            <span class="top-title">OUR CONTENT</span>
            <h2 class="text-white">Unlimited Entertainment at Your Fingertips</h2>
            <p class="text-silver">
              Experience the ultimate streaming service with our extensive collection of premium content. From live sports to blockbuster movies, we bring the world's best entertainment directly to your screen with crystal-clear quality and zero buffering.
            </p>
            <p>
              <span class="text-white">
                Access exclusive sports events, premium movie channels, and international programming. Our advanced streaming technology ensures smooth playback across all your devices.
              </span>
            </p>
            <ul class="ps-0 list-unstyled content-list">
              <li class="d-flex align-items-center">
                <i class="ti ti-circle-check"></i>
                <span>25,000+ channels in HD & 4K quality</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ti ti-circle-check"></i>
                <span>500,000+ movies and TV shows on demand</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ti ti-circle-check"></i>
                <span>Live sports & PPV events in HD</span>
              </li>
            </ul>
            <!-- Temporarily disabled button
            <RouterLink to="/about-us" class="btn">
              <span class="border-style">Explore Our Content</span>
            </RouterLink>
            -->

            <img
              src="@/assets/images/shape-7.png"
              class="shape shape-7"
              alt="shape"
            />
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/shape-6.png" class="shape shape-6" alt="shape" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurContent",
});
</script>
