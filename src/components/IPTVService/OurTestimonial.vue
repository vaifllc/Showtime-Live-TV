<template>
  <div class="testimonial-area pt-100">
    <div class="container mw-1356">
      <div
        class="testimonial-wrap bg-img pb-100"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <div class="section-title text-center mw-860 m-auto mb-90">
          <span class="top-title">TESTIMONIAL</span>
          <h2 class="text-white">Being nice shouldn’t be an afterthought</h2>
          <p class="text-white">
            The reviews are in and we’re as obsessed with your internet as you
            are.
          </p>
        </div>

        <div class="position-relative z-1">
          <Swiper
            :slidesPerView="1"
            :spaceBetween="50"
            :centeredSlides="false"
            :preventClicks="true"
            :loop="true"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }"
            :navigation="{
              nextEl: '.next',
              prevEl: '.prev',
            }"
            :breakpoints="{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 2,
              },
              1600: {
                slidesPerView: 2,
              },
            }"
            :modules="modules"
            class="testomonial-slide-two"
          >
            <SwiperSlide
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <div class="testimonial-single-item-two">
                <div class="d-flex align-items-center mb-32">
                  <div class="flex-shrink-0">
                    <img :src="testimonial.image" :alt="testimonial.name" />
                  </div>
                  <div class="flex-grow-1 ms-4">
                    <ul
                      class="ps-0 list-unstyled d-flex align-items-center gap-1"
                    >
                      <li v-for="star in 5" :key="star">
                        <i class="ti ti-star-filled"></i>
                      </li>
                    </ul>
                    <h3>{{ testimonial.name }}</h3>
                  </div>
                </div>
                <p>{{ testimonial.review }}</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="testomonial-controller">
            <div class="controller-icon prev">
              <i class="ti ti-arrow-left"></i>
            </div>
            <div class="controller-icon next">
              <i class="ti ti-arrow-right"></i>
            </div>
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

export default defineComponent({
  name: "OurTestimonial",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bgImage = require("@/assets/images/testimonial-bg.png");
    const testimonials = ref([
      {
        image: require("@/assets/images/testimonial-1.jpg"),
        name: "Britteney Anderson",
        review:
          "Even though I ended up staying with Nestors, I want to commend Sara for her professionalism, knowledge, patience, and excellent service.",
      },
      {
        image: require("@/assets/images/testimonial-2.jpg"),
        name: "Victor James",
        review:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off! Even though I ended up staying with Nestors.",
      },
      {
        image: require("@/assets/images/testimonial-1.jpg"),
        name: "Britteney Anderson",
        review:
          "Even though I ended up staying with Nestors, I want to commend Sara for her professionalism, knowledge, patience, and excellent service.",
      },
      {
        image: require("@/assets/images/testimonial-2.jpg"),
        name: "Victor James",
        review:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off! Even though I ended up staying with Nestors.",
      },
    ]);

    return {
      modules: [Autoplay, Navigation],
      testimonials,
      bgImage,
    };
  },
});
</script>
