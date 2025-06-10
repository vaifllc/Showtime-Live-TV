<template>
  <div class="explore-speeds">
    <h3 class="mb-4">Explore Speeds & Prices</h3>

    <Swiper
      :slides-per-view="1"
      :space-between="24"
      :centeredSlides="false"
      :preventClicks="true"
      :loop="true"
      :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      }"
      :modules="modules"
      class="explore-speeds-slide"
    >
      <SwiperSlide v-for="(plan, index) in speedPlans" :key="index">
        <div class="explore-speeds-wrap">
          <div class="explore-mbps">
            <img src="@/assets/images/line.svg" alt="line" />
            <h2>{{ plan.speed }}</h2>
            <span>Mbps</span>
          </div>
          <div class="starting">
            <span>STARTING AT </span>
            <h6>${{ plan.price }}</h6>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default defineComponent({
  name: "ExploreSpeeds",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const speedPlans = ref([
      {
        speed: 75,
        price: 49.9,
      },
      {
        speed: 100,
        price: 79.9,
      },
      {
        speed: 150,
        price: 109.9,
      },
      {
        speed: 200,
        price: 129.9,
      },
      {
        speed: 250,
        price: 149.9,
      },
      {
        speed: 75,
        price: 49.9,
      },
      {
        speed: 100,
        price: 79.9,
      },
      {
        speed: 150,
        price: 109.9,
      },
      {
        speed: 200,
        price: 129.9,
      },
      {
        speed: 250,
        price: 149.9,
      },
    ]);

    return {
      modules: [Autoplay],
      speedPlans,
    };
  },
});
</script>
