<template>
  <div class="ott-platform-movies-area ptb-100">
    <div class="container">
      <div
        class="section-title d-flex justify-content-between align-items-center flex-wrap"
        data-cues="zoomOut"
      >
        <h2 class="text-white">Latest Movies</h2>
        <RouterLink to="/channel-list" class="btn">
          <span class="border-style">View All</span>
        </RouterLink>
      </div>
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :speed="18000"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }"
      :keyboard="{ enabled: true, onlyInViewport: false }"
      class="ott-platform-movies-1 mb-2"
      :breakpoints="breakpoints1"
    >
      <SwiperSlide v-for="(movie, index) in movies1" :key="index">
        <div class="ott-platform-movies-card">
          <img :src="movie" alt="image" />
        </div>
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :speed="18000"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }"
      :keyboard="{ enabled: true, onlyInViewport: false }"
      dir="rtl"
      class="ott-platform-movies-2"
      :breakpoints="breakpoints2"
    >
      <SwiperSlide v-for="(movie, index) in movies2" :key="index">
        <div class="ott-platform-movies-card">
          <img :src="movie" alt="image" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

export default defineComponent({
  name: "LatestMovies",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const movies1 = [
      require("@/assets/images/ott-platform/movies1.jpg"),
      require("@/assets/images/ott-platform/movies2.jpg"),
      require("@/assets/images/ott-platform/movies3.jpg"),
      require("@/assets/images/ott-platform/movies4.jpg"),
      require("@/assets/images/ott-platform/movies1.jpg"),
      require("@/assets/images/ott-platform/movies2.jpg"),
      require("@/assets/images/ott-platform/movies3.jpg"),
      require("@/assets/images/ott-platform/movies4.jpg"),
    ];

    const movies2 = [
      require("@/assets/images/ott-platform/movies5.jpg"),
      require("@/assets/images/ott-platform/movies6.jpg"),
      require("@/assets/images/ott-platform/movies7.jpg"),
      require("@/assets/images/ott-platform/movies8.jpg"),
      require("@/assets/images/ott-platform/movies9.jpg"),
      require("@/assets/images/ott-platform/movies10.jpg"),
      require("@/assets/images/ott-platform/movies11.jpg"),
      require("@/assets/images/ott-platform/movies12.jpg"),
    ];

    const breakpoints1 = {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.5 },
      1440: { slidesPerView: 3 },
      1600: { slidesPerView: 3 },
      1881: { slidesPerView: 4 },
    };

    const breakpoints2 = {
      370: { slidesPerView: 1.5 },
      450: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      800: { slidesPerView: 3 },
      992: { slidesPerView: 2.5 },
      1440: { slidesPerView: 3 },
      1600: { slidesPerView: 3.5 },
    };

    return {
      movies1,
      movies2,
      breakpoints1,
      breakpoints2,
      modules: [Autoplay, Keyboard],
    };
  },
});
</script>
