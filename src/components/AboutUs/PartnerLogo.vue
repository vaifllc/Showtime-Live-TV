<template>
  <div class="partner-area pt-100">
    <div class="container mw-1356">
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
        class="partner-slide"
      >
        <SwiperSlide v-for="partner in partners" :key="partner.id">
          <RouterLink to="/about-us">
            <img :src="partner.image" alt="partner" />
          </RouterLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default defineComponent({
  name: "PartnerLogo",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      partners: [
        {
          id: 1,
          image: require("@/assets/images/partner-1.png"),
        },
        {
          id: 2,
          image: require("@/assets/images/partner-2.png"),
        },
        {
          id: 3,
          image: require("@/assets/images/partner-3.png"),
        },
        {
          id: 4,
          image: require("@/assets/images/partner-4.png"),
        },
        {
          id: 5,
          image: require("@/assets/images/partner-5.png"),
        },
        {
          id: 6,
          image: require("@/assets/images/partner-6.png"),
        },
        {
          id: 7,
          image: require("@/assets/images/partner-1.png"),
        },
        {
          id: 8,
          image: require("@/assets/images/partner-2.png"),
        },
        {
          id: 9,
          image: require("@/assets/images/partner-3.png"),
        },
        {
          id: 10,
          image: require("@/assets/images/partner-4.png"),
        },
        {
          id: 11,
          image: require("@/assets/images/partner-5.png"),
        },
        {
          id: 12,
          image: require("@/assets/images/partner-6.png"),
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
