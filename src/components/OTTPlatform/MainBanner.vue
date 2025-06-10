<template>
  <div class="ott-platform-slider-area">
    <Swiper
      :slidesPerView="1"
      :loop="true"
      :effect="'fade'"
      :speed="1000"
      :autoHeight="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }"
      :modules="modules"
      class="ott-platform-slider"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div
          class="ott-platform-slider-item"
          :style="{ backgroundImage: `url(${slide.bgImage})` }"
        >
          <div class="container mw-1685">
            <div class="ott-platform-slider-content">
              <ul class="meta">
                <li v-for="(genre, i) in slide.genres" :key="i">
                  <RouterLink to="/channel-list">{{ genre }}</RouterLink>
                </li>
              </ul>
              <h1>{{ slide.title }}</h1>
              <div class="rating-and-clock">
                <ul class="rating">
                  <li v-for="n in 5" :key="n">
                    <i class="ri-star-fill"></i>
                  </li>
                  <li>
                    <span>{{ slide.rating }}</span>
                  </li>
                </ul>
                <div class="clock">
                  <img
                    src="@/assets/images/ott-platform/clock.svg"
                    alt="clock"
                  />
                  <span>{{ slide.duration }}</span>
                </div>
              </div>
              <div class="inner-bottom-content">
                <h5>PLOT</h5>
                <p>
                  {{ slide.plot }}
                  <RouterLink to="/services-details">Read More</RouterLink>
                </p>
                <ul class="btn-list">
                  <li>
                    <RouterLink to="/pricing-plan" class="btn">
                      <span class="border-style">Watch Now</span>
                    </RouterLink>
                  </li>
                  <li>
                    <button type="submit" class="btn">
                      <span class="border-style">Add To Watchlist</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <ul class="ott-platform-slider-button">
        <li>
          <div class="button-next">
            <span>NEXT</span>
          </div>
        </li>
        <li>
          <div class="button-prev">
            <span>PREVIOUS</span>
          </div>
        </li>
      </ul>
    </Swiper>

    <WatchTeaserTrailer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import WatchTeaserTrailer from "./WatchTeaserTrailer.vue";

export default defineComponent({
  name: "MainBanner",
  components: {
    Swiper,
    SwiperSlide,
    WatchTeaserTrailer,
  },
  setup() {
    const slides = ref([
      {
        bgImage: require("@/assets/images/ott-platform/slider-bg1.jpg"),
        title: "The Last Thunder",
        genres: ["Horror", "Thriller", "Action"],
        rating: "5.0",
        duration: "2h : 15m",
        plot: "A small, secluded town nestled deep within the mountains of Canada. The town, Maplewood, is surrounded by dense forests, with only one road in and out. The local population",
      },
      {
        bgImage: require("@/assets/images/ott-platform/slider-bg2.jpg"),
        title: "Dark Horizon",
        genres: ["Sci-Fi", "Adventure"],
        rating: "4.8",
        duration: "1h : 50m",
        plot: "A small, secluded town nestled deep within the mountains of Canada. The town, Maplewood, is surrounded by dense forests, with only one road in and out. The local population",
      },
    ]);

    return {
      modules: [Autoplay, Navigation, EffectFade],
      slides,
    };
  },
});
</script>
