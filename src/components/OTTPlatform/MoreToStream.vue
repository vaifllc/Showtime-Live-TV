<template>
  <div
    class="our-content-area ott-platform-our-content pb-100 position-relative z-1"
  >
    <div class="container mw-1356">
      <div class="row align-items-center">
        <div class="col-lg-6 col-xl-7">
          <div
            class="our-content-img position-relative z-2 text-center text-lg-end"
          >
            <img
              src="@/assets/images/our-content.png"
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
            <h2 class="text-white">More to Stream</h2>
            <p class="text-silver">
              With our large and comprehensive collection of TV channels, never
              miss your favorite sports games and TV shows. You can be the first
              to see your new episode.
            </p>
            <p>
              <span class="text-white"
                >Watch exclusive sports channels every week. Get top-rated TV
                customer service. Bundle your favorite services.</span
              >
            </p>
            <ul class="ps-0 list-unstyled content-list">
              <li class="d-flex align-items-center">
                <i class="ti ti-circle-check"></i>
                <span>25,000 worldwide channels 4K</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ti ti-circle-check"></i>
                <span>500K new and old movies</span>
              </li>
            </ul>
            <RouterLink to="/about-us" class="btn">
              <span class="border-style">View Content List</span>
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
  name: "MoreToStream",
});
</script>
