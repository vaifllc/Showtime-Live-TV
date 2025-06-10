<template>
  <div class="banner-slide-area">
    <!-- Replace banner slides with static background image -->
    <div class="static-background">
      <img src="@/assets/images/showtimebackground.jpg" alt="Showtime Background" class="background-image" />
      <div class="overlay"></div>
    </div>

    <!-- Hide the slide components completely -->
    <!--
    <BannerSlideOne />
    <BannerSlideTwo />
    <BannerSlideThree />
    -->

    <div class="banner-content-wrap">
      <div class="container">
        <div
          class="banner-content"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <span class="top-title">FAST IPTV CONNECTION</span>
          <h1>Premium Entertainment at Your Fingertips</h1>
          <p>
            Includes all your favorite channels with local news, live sports,
            weather, and premium entertainment
          </p>
          <!-- <form class="banner-form position-relative">
            <input
              type="text"
              class="form-control"
              placeholder="Search your content here"
            />
            <button
              type="submit"
              class="btn position-absolute top-50 end-0 translate-middle-y"
            >
              <span class="border-style">
                <span class="d-none d-sm-block">Search Now</span>
                <i class="ti ti-send d-sm-none"></i>
              </span>
            </button>
          </form> -->
          <ul
            class="ps-0 mb-0 list-unstyled d-flex align-items-center flex-wrap several-list gap-2 gap-lg-3 justify-content-center"
          >
            <li class="d-flex align-items-center">
              <i class="ti ti-circle-check"></i>
              <span>Connect several devices at once</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="ti ti-circle-check"></i>
              <span>25,000 worldwide channels 4K</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="ti ti-circle-check"></i>
              <span>500K new and old movies</span>
            </li>
          </ul>
        </div>

        <!-- <ul
          class="partner-logo ps-0 mb-0 list-unstyled d-none d-md-flex justify-content-lg-between flex-wrap gap-3 align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <li>
            <img src="@/assets/images/partner-7.png" alt="partner" />
          </li>
          <li>
            <img src="@/assets/images/partner-8.png" alt="partner" />
          </li>
          <li>
            <img src="@/assets/images/partner-9.png" alt="partner" />
          </li>
          <li>
            <img src="@/assets/images/partner-10.png" alt="partner" />
          </li>
          <li>
            <img src="@/assets/images/partner-11.png" alt="partner" />
          </li>
        </ul> -->

        <PartnerSlide />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PartnerSlide from "./PartnerSlide.vue";

export default defineComponent({
  name: "MainBanner",
  components: {
    // Remove the unused banner slide components
    // BannerSlideOne,
    // BannerSlideTwo,
    // BannerSlideThree,
    PartnerSlide,
  },
});
</script>

<style scoped>
.banner-slide-area {
  position: relative;
  min-height: 100vh;
  background: transparent !important;
}

/* Add new styles for static background */
.static-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
} */

.banner-content-wrap {
  position: relative;
  z-index: 10;
  background: transparent !important;
  height: 100vh;
  display: flex;
  align-items: center;
}

.banner-content {
  position: relative;
  background: transparent !important;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.container {
  background: transparent !important;
}

/* Target text elements to ensure they're visible */
.top-title, h1, p, .several-list li {
  background: transparent !important;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

h1 {
  font-size: 3rem;
  margin: 1rem 0;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

/* Add subtle background only to list items for better readability */
.several-list {
  margin-top: 1.5rem;
}

.several-list li {
  background: rgba(0, 0, 0, 0.2) !important;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0.3rem;
}

.several-list li i {
  color: var(--primary);
  margin-right: 8px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .several-list li {
    font-size: 0.9rem;
  }
}
</style>
