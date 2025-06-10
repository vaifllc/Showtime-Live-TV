<template>
  <div class="mh-movies-area ptb-100">
    <div class="container-fluid">
      <div class="mh-movies-title">
        <h5 class="text-white">TOP 10 MOVIES TODAY</h5>
      </div>

      <Swiper
        :slidesPerView="1"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          el: '.mh-movies-pagination',
          clickable: true,
        }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 5 },
        }"
        :modules="modules"
        class="mh-movies-slider"
      >
        <SwiperSlide v-for="(movie, index) in movies" :key="index">
          <div class="mh-movies-card">
            <div class="image">
              <img :src="movie.image" :alt="movie.title" />
              <div class="number">{{ index + 1 }}</div>
            </div>
            <div class="content">
              <h3>{{ movie.title }}</h3>
              <RouterLink to="/channel-list" class="link-btn">
                More Info
                <i class="ti ti-arrow-right"></i>
              </RouterLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="mh-movies-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

export default defineComponent({
  name: "TopMoviesToday",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const movies = ref([
      {
        title: "The Hunter Day",
        image: require("@/assets/images/movie-home/movie1.jpg"),
      },
      {
        title: "The Silent Truth",
        image: require("@/assets/images/movie-home/movie2.jpg"),
      },
      {
        title: "Mystic Shadows",
        image: require("@/assets/images/movie-home/movie3.jpg"),
      },
      {
        title: "Dark Realm",
        image: require("@/assets/images/movie-home/movie4.jpg"),
      },
      {
        title: "Eternal Quest",
        image: require("@/assets/images/movie-home/movie5.jpg"),
      },
      {
        title: "Lost in Time",
        image: require("@/assets/images/movie-home/movie6.jpg"),
      },
      {
        title: "Galaxy Voyage",
        image: require("@/assets/images/movie-home/movie1.jpg"),
      },
      {
        title: "The Last Stand",
        image: require("@/assets/images/movie-home/movie2.jpg"),
      },
      {
        title: "Fallen Empire",
        image: require("@/assets/images/movie-home/movie3.jpg"),
      },
      {
        title: "Neon City",
        image: require("@/assets/images/movie-home/movie4.jpg"),
      },
    ]);

    return {
      modules: [Autoplay, Pagination],
      movies,
    };
  },
});
</script>
