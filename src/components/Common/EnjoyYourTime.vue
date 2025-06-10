<template>
  <div class="movies-area pb-100">
    <div class="container mw-1356">
      <div
        class="section-title mw-690 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">ENJOY YOUR TIME</span>
        <h2 :class="className">
          Enjoy watching now Movies, Series, Shows, Anime and More
        </h2>
      </div>
    </div>

    <div class="container-fluid p-0 mt-5">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }"
        :modules="modules"
        class="movies-slide"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <div class="movie-card">
            <div class="movie-image">
              <img :src="slide.image" :alt="slide.title" class="w-100" />
              <div class="movie-overlay">
                <div class="movie-info">
                  <h4 class="movie-title">{{ slide.title }}</h4>
                  <div class="movie-meta">
                    <span class="movie-category">{{ slide.category }}</span>
                    <span class="movie-rating">
                      <i class="ri-star-fill"></i> {{ slide.rating }}
                    </span>
                  </div>
                </div>
                <div class="movie-actions">
                  <button class="watch-btn"><i class="ri-play-fill"></i> Watch</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="text-center mt-5 pt-2">
      <p class="text-silver">Everything you need to enjoy your time</p>
      <RouterLink to="/pricing-plan" class="btn btn-cta mt-3">
        <span class="border-style">Get It Now</span>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

export default defineComponent({
  name: "EnjoyYourTime",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["className"],
  data() {
    return {
      slides: [
        {
          id: 1,
          image: require("@/assets/images/movie1.jpeg"),
          title: "Inception",
          category: "Sci-Fi",
          rating: "8.8",
        },
        {
          id: 2,
          image: require("@/assets/images/movie2.jpeg"),
          title: "The Matrix",
          category: "Action",
          rating: "8.7",
        },
        {
          id: 3,
          image: require("@/assets/images/movie3.jpeg"),
          title: "Interstellar",
          category: "Sci-Fi",
          rating: "8.6",
        },
        {
          id: 4,
          image: require("@/assets/images/movie4.jpeg"),
          title: "The Dark Knight",
          category: "Action",
          rating: "9.0",
        },
        {
          id: 5,
          image: require("@/assets/images/movie5.jpeg"),
          title: "Pulp Fiction",
          category: "Crime",
          rating: "8.9",
        },
        {
          id: 6,
          image: require("@/assets/images/movie6.jpeg"),
          title: "Fight Club",
          category: "Drama",
          rating: "8.8",
        },
        {
          id: 7,
          image: require("@/assets/images/movie7.jpeg"),
          title: "The Godfather",
          category: "Crime",
          rating: "9.2",
        },
        {
          id: 8,
          image: require("@/assets/images/movie8.jpeg"),
          title: "Forrest Gump",
          category: "Drama",
          rating: "8.8",
        },
        {
          id: 9,
          image: require("@/assets/images/movie9.jpeg"),
          title: "The Shawshank Redemption",
          category: "Drama",
          rating: "9.3",
        },
        {
          id: 10,
          image: require("@/assets/images/movie10.jpeg"),
          title: "Goodfellas",
          category: "Crime",
          rating: "8.7",
        },
        {
          id: 11,
          image: require("@/assets/images/movie11.jpeg"),
          title: "The Silence of the Lambs",
          category: "Thriller",
          rating: "8.6",
        },
        {
          id: 12,
          image: require("@/assets/images/movie12.jpeg"),
          title: "Gladiator",
          category: "Action",
          rating: "8.5",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, EffectFade, Navigation],
    };
  },
});
</script>

<style scoped>
.movies-area {
  overflow: hidden;
  position: relative;
  padding-top: 20px;
}

.movie-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  transform: translateY(0);
  height: 100%;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
}

.movie-image {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.movie-image img {
  transition: transform 0.6s ease;
  object-fit: cover;
  height: 100%;
}

.movie-card:hover .movie-image img {
  transform: scale(1.1);
}

.movie-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%);
  padding: 20px 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.movie-card:hover .movie-overlay {
  opacity: 1;
}

.movie-title {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.movie-category {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.movie-rating {
  color: #ffca3a;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.movie-rating i {
  margin-right: 4px;
}

.movie-actions {
  margin-top: auto;
}

.watch-btn {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.watch-btn:hover {
  background-color: #e04f32;
}

.watch-btn i {
  margin-right: 5px;
  font-size: 16px;
}

.btn-cta {
  margin-top: 15px;
  transition: transform 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .movie-overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.2) 100%);
  }

  .movie-title {
    font-size: 14px;
  }

  .movie-category, .movie-rating {
    font-size: 12px;
  }

  .watch-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
