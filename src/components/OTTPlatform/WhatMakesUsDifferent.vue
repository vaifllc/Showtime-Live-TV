<template>
  <div class="features-area pb-100">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 class="text-white">What Makes Us Different</h2>
      </div>
      <div class="row justify-content-center">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="(index + 1) * 100 + 100"
        >
          <div class="features-single-item position-relative hover-style1">
            <div class="hover-style2">
              <i :class="feature.icon" class="icon"></i>
              <h3>
                <RouterLink :to="feature.link">{{ feature.title }}</RouterLink>
              </h3>
              <p class="text-silver">{{ feature.description }}</p>
              <RouterLink :to="feature.link" class="read-more style-two">
                {{ feature.buttonText }}
                <i class="ti ti-arrow-right"></i>
              </RouterLink>
              <span class="count">{{ index + 1 }}</span>
            </div>
            <img
              src="@/assets/images/features-shape.png"
              class="features-shape"
              alt="features-shape"
            />
          </div>
        </div>
      </div>

      <div class="col-lg-12 text-center pt-4">
        <RouterLink to="/services" class="read-more style-two text-grey-teal">
          Explore All Our Features
          <i class="ti ti-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WhatMakesUsDifferent",
  setup() {
    const features = ref([
      {
        title: "TV & Streaming",
        description:
          "Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.",
        link: "/services-details",
        buttonText: "Shop Now",
        icon: "flaticon-tv",
      },
      {
        title: "Selected Contents",
        description:
          "Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.",
        link: "/services-details",
        buttonText: "View Content",
        icon: "flaticon-content-marketing",
      },
      {
        title: "Go Mobile",
        description:
          "Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.",
        link: "/services-details",
        buttonText: "Download App",
        icon: "flaticon-smartphone",
      },
    ]);

    return { features };
  },
});
</script>
