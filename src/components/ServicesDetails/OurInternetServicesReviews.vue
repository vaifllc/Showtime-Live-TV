<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :centeredSlides="false"
    :preventClicks="true"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    :navigation="{
      prevEl: '.prev2',
      nextEl: '.next2',
    }"
    :modules="modules"
    class="reviews-slide position-relative"
  >
    <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
      <div class="testimonial-single-item">
        <div class="d-flex align-items-center mb-32">
          <div class="flex-shrink-0">
            <img
              :src="testimonial.image"
              class="rounded-circle"
              alt="testimonial"
            />
          </div>
          <div class="flex-grow-1 ms-4">
            <ul class="ps-0 list-unstyled d-flex align-items-center gap-1">
              <li v-for="star in 5" :key="star">
                <i class="ti ti-star-filled"></i>
              </li>
            </ul>
            <h3>{{ testimonial.name }}</h3>
          </div>
        </div>
        <p>{{ testimonial.message }}</p>
      </div>
    </SwiperSlide>

    <div class="testomonial-controller">
      <div class="controller-icon prev2">
        <i class="ti ti-arrow-left"></i>
      </div>
      <div class="controller-icon next2">
        <i class="ti ti-arrow-right"></i>
      </div>
    </div>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";

export default defineComponent({
  name: "OurInternetServicesReviews",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimonials = ref([
      {
        name: "Britteney Anderson",
        image: require("@/assets/images/testimonial-1.jpg"),
        message:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off! Even though I ended up staying with Nestors.",
      },
      {
        name: "Victor James",
        image: require("@/assets/images/testimonial-2.jpg"),
        message:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off! Even though I ended up staying with Nestors.",
      },
    ]);

    return {
      testimonials,
      modules: [Autoplay, Navigation],
    };
  },
});
</script>
