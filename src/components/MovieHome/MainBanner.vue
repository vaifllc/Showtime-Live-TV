<template>
  <div class="movie-home-slider-area">
    <Swiper
      :slidesPerView="1"
      :loop="true"
      :effect="'fade'"
      :speed="1000"
      :autoHeight="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }"
      :pagination="{
        el: '.movie-home-slider-pagination',
        clickable: true,
      }"
      :modules="modules"
      class="movie-home-slider"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div
          class="movie-home-slider-item"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="container-fluid">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="movie-home-slider-content" data-cue="slideInLeft">
                  <ul class="meta">
                    <li v-for="(category, i) in slide.categories" :key="i">
                      <RouterLink to="/channel-list">{{ category }}</RouterLink>
                    </li>
                  </ul>
                  <h1>{{ slide.title }}</h1>
                  <p>
                    {{ slide.description }}
                    <RouterLink to="/services-details">Read More</RouterLink>
                  </p>
                  <div class="rating-and-clock">
                    <ul class="rating">
                      <li v-for="star in 5" :key="star">
                        <i class="ri-star-fill"></i>
                      </li>
                      <li>
                        <span>{{ slide.rating }}</span>
                      </li>
                    </ul>
                    <div class="clock">
                      <img
                        src="@/assets/images/movie-home/clock.svg"
                        alt="clock"
                      />
                      <span>{{ slide.duration }}</span>
                    </div>
                  </div>
                  <ul class="btn-list">
                    <li>
                      <RouterLink to="/pricing-plan" class="btn">
                        <span class="border-style">Watch Now</span>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/channel-list" class="btn">
                        <span class="border-style">See Trailer</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="movie-home-slider-video-btn">
                  <lightgallery :settings="{ speed: 500, plugins }">
                    <a :href="slide.trailerUrl" class="video-btn">
                      <i class="ri-play-fill"></i>
                    </a>
                  </lightgallery>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <ul class="movie-home-slider-button">
        <li>
          <div class="button-prev">
            <img src="@/assets/images/movie-home/arrow1.svg" alt="arrow1" />
          </div>
        </li>
        <li>
          <div class="button-next">
            <img src="@/assets/images/movie-home/arrow2.svg" alt="arrow2" />
          </div>
        </li>
      </ul>

      <div class="movie-home-slider-pagination"></div>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import Lightgallery from "lightgallery/vue";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

export default defineComponent({
  name: "MainBanner",
  components: {
    Swiper,
    SwiperSlide,
    Lightgallery,
  },
  setup() {
    const plugins = ref([lgVideo]);

    const slides = ref([
      {
        title: "The Forest Hunter",
        description:
          "A small, secluded town nestled deep within the mountains of Canada...",
        image: require("@/assets/images/movie-home/slider-bg1.jpg"),
        categories: ["HORROR", "THRILLER", "ACTION"],
        rating: "5.0",
        duration: "2h : 15m",
        trailerUrl: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        title: "The Hunter Face",
        description:
          "A thrilling journey into the unknown as a fearless warrior faces his ultimate enemy...",
        image: require("@/assets/images/movie-home/slider-bg2.jpg"),
        categories: ["DRAMA", "ADVENTURE", "THRILLER"],
        rating: "4.8",
        duration: "1h : 50m",
        trailerUrl: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        title: "The Fighter Of The Jungle",
        description:
          "A mysterious figure protects the jungle from invaders while uncovering his hidden past...",
        image: require("@/assets/images/movie-home/slider-bg3.jpg"),
        categories: ["ACTION", "MYSTERY", "FANTASY"],
        rating: "4.9",
        duration: "2h : 05m",
        trailerUrl: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
    ]);

    return {
      modules: [Autoplay, Navigation, Pagination, EffectFade],
      slides,
      plugins,
    };
  },
});
</script>
