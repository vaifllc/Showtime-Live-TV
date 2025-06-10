<template>
  <div class="features-area pt-100 pb-75">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">WHY NESTOR</span>
        <h2>WHAT MAKE US DIFFERENT</h2>
      </div>
      <div class="row justify-content-center">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="200 + index * 100"
        >
          <div
            class="features-single-item position-relative hover-style1 style-two"
          >
            <div class="hover-style2">
              <i :class="feature.icon" class="icon"></i>
              <h3>
                <RouterLink to="/services-details">
                  {{ feature.title }}
                </RouterLink>
              </h3>
              <p class="text-silver">{{ feature.description }}</p>
              <RouterLink to="/services-details" class="read-more style-two">
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
        icon: "flaticon-tv",
        title: "100 GB Download Speed",
        description:
          "Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.",
        buttonText: "Shop Now",
      },
      {
        icon: "flaticon-content-marketing",
        title: "99% Internet Uptime",
        description:
          "Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.",
        buttonText: "View Content",
      },
      {
        icon: "flaticon-smartphone",
        title: "24/7 Customer Support",
        description:
          "Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.",
        buttonText: "Download App",
      },
    ]);

    return { features };
  },
});
</script>
