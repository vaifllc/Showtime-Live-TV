<template>
  <div class="all-movies-area pb-100">
    <div class="container-fluid">
      <div class="mh-movies-title">
        <h5 class="text-white">SPECIAL MOVIES</h5>
      </div>
      <div class="all-movies-inner">
        <Swiper
          :spaceBetween="25"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :navigation="{
            prevEl: '.movies-button-prev',
            nextEl: '.movies-button-next',
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }"
          :modules="modules"
          class="all-movies-slider"
        >
          <SwiperSlide v-for="(movie, index) in movies" :key="index">
            <div class="all-movies-card">
              <div class="image">
                <img :src="movie.image" :alt="movie.title" />

                <lightgallery :settings="{ speed: 500, plugins }">
                  <a :href="movie.trailer" class="video-btn">
                    <i class="ri-play-fill"></i>
                  </a>
                </lightgallery>
              </div>
              <div class="content">
                <div class="top">
                  <button type="submit" class="link-btn">
                    Add To Watchlist
                    <i class="ri-add-line"></i>
                  </button>
                  <div class="share">
                    <i class="ri-share-fill"></i>
                    <ul class="list">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i class="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/i/flow/login" target="_blank">
                          <i class="ri-twitter-x-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://bd.linkedin.com/" target="_blank">
                          <i class="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i class="ri-instagram-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title">
                  <h3>{{ movie.title }}</h3>
                  <span>Release Date: {{ movie.time }}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="all-movies-button">
          <div class="movies-button-prev">
            <i class="ri-arrow-left-s-line"></i>
          </div>
          <div class="movies-button-next">
            <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

import Lightgallery from "lightgallery/vue";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

export default defineComponent({
  name: "SpecialMovies",
  components: {
    Swiper,
    SwiperSlide,
    Lightgallery,
  },
  setup() {
    const plugins = ref([lgVideo]);

    const movies = ref([
      {
        image: require("@/assets/images/movie-home/movie13.jpg"),
        title: "The Mystery House",
        time: "02h :13mins",
        trailer: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        image: require("@/assets/images/movie-home/movie14.jpg"),
        title: "The Mystery House",
        time: "02h :13mins",
        trailer: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        image: require("@/assets/images/movie-home/movie15.jpg"),
        title: "The Mystery House",
        time: "02h :13mins",
        trailer: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        image: require("@/assets/images/movie-home/movie16.jpg"),
        title: "The Mystery House",
        time: "02h :13mins",
        trailer: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        image: require("@/assets/images/movie-home/movie17.jpg"),
        title: "The Mystery House",
        time: "02h :13mins",
        trailer: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
      {
        image: require("@/assets/images/movie-home/movie18.jpg"),
        title: "The Mystery House",
        time: "02h :13mins",
        trailer: "https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30",
      },
    ]);

    return {
      modules: [Autoplay, Navigation],
      movies,
      plugins,
    };
  },
});
</script>
