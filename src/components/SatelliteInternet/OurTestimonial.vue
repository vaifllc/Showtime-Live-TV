<template>
  <div
    class="testimonial-area si-without-border-radius ptb-100 position-relative z-1"
  >
    <div class="container">
      <div class="section-title mw-1015 m-auto text-center" data-cues="zoomOut">
        <span class="top-title">TESTIMONIAL</span>
        <h2>BEING NICE SHOULDN'T BE AN AFTERTHOUGHT</h2>
        <p>
          The reviews are in and we're as obsessed with your internet as you
          are.
        </p>
      </div>
    </div>

    <div class="container-fluid p-md-0 overflow-hidden">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="50"
        :loop="true"
        :centeredSlides="true"
        :preventClicks="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
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
            slidesPerView: 4.5,
          },
        }"
        :modules="modules"
        class="testomonial-slide"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <div :class="['testimonial-single-item', testimonial.styleClass]">
            <ul class="ps-0 list-unstyled d-flex gap-1">
              <li v-for="star in 5" :key="star">
                <i class="ri-star-fill"></i>
              </li>
            </ul>
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.message }}</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        class="d-flex justify-content-between align-items-center google-review flex-wrap"
        data-cues="zoomOut"
      >
        <div class="d-flex align-items-center">
          <img src="@/assets/images/google.png" alt="google" />
          <p>Ratings <span>4.7</span></p>
        </div>
        <RouterLink to="/" class="read-more text-grey-teal">
          <span>View All Ratings</span>
          <i class="ti ti-arrow-right"></i>
        </RouterLink>
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
    const testimonials = ref([
      {
        name: "Andrew",
        message:
          "You’re affiliated with Groupe TAQ. I myself have multiple sclerosis and I am very humbled that I am helping oxio help TAQ.",
        styleClass: "",
      },
      {
        name: "Britteney",
        message:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
        styleClass: "two",
      },
      {
        name: "Tim",
        message:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off!",
        styleClass: "two",
      },
      {
        name: "Jonathon",
        message:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
        styleClass: "",
      },
      {
        name: "Andrew",
        message:
          "You’re affiliated with Groupe TAQ. I myself have multiple sclerosis and I am very humbled that I am helping oxio help TAQ.",
        styleClass: "",
      },
      {
        name: "Britteney",
        message:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
        styleClass: "two",
      },
      {
        name: "Tim",
        message:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off!",
        styleClass: "two",
      },
      {
        name: "Jonathon",
        message:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
        styleClass: "",
      },
    ]);

    return {
      modules: [Autoplay, Navigation],
      testimonials,
    };
  },
});
</script>
