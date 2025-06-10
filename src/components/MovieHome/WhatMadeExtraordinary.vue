<template>
  <div class="ott-made-area movies-made pt-100 pb-75">
    <div class="container">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 class="text-white">What Made Nestor Extraordinary</h2>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="200 + index * 100"
        >
          <div class="ott-made-card">
            <div class="image">
              <img :src="feature.image" :alt="feature.title" />
            </div>
            <div class="content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "WhatMadeExtraordinary",
  setup() {
    const features = ref([
      {
        image: new URL(
          "@/assets/images/ott-platform/made1.png",
          import.meta.url
        ).href,
        title: "Upto 6 Individual Accounts",
        description: "With personalized recommendations.",
      },
      {
        image: new URL(
          "@/assets/images/ott-platform/made2.png",
          import.meta.url
        ).href,
        title: "Unlimited DVR Space For All",
        description: "Everyone gets their own login.",
      },
      {
        image: new URL(
          "@/assets/images/ott-platform/made3.png",
          import.meta.url
        ).href,
        title: "4 Simultaneous Streams",
        description: "Watch on your favourite device.",
      },
    ]);

    return { features };
  },
});
</script>
