<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="24"
    :centeredSlides="false"
    :preventClicks="true"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 2,
      },
      340: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 6,
      },
    }"
    :modules="modules"
    class="partner-slide d-md-none"
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <RouterLink to="/about-us">
        <img :src="slide.image" alt="partner" />
      </RouterLink>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default defineComponent({
  name: "PartnerSlide",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          image: require("@/assets/images/partner-7.png"),
        },
        {
          id: 2,
          image: require("@/assets/images/partner-8.png"),
        },
        {
          id: 3,
          image: require("@/assets/images/partner-9.png"),
        },
        {
          id: 4,
          image: require("@/assets/images/partner-10.png"),
        },
        {
          id: 5,
          image: require("@/assets/images/partner-11.png"),
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
});
</script>
