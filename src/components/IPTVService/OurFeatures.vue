<template>
  <div class="features-area ptb-100 bg-gondola2">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">FEATURES</span>
        <h2 class="text-white">What makes us different</h2>
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
          <div class="features-single-item position-relative hover-style1">
            <div class="hover-style2">
              <i :class="feature.icon" class="icon"></i>
              <h3 class="text-white">
                <!-- Temporarily disabled link
                <RouterLink :to="feature.link">{{ feature.title }}</RouterLink>
                -->
                {{ feature.title }}
              </h3>
              <p class="text-silver">{{ feature.description }}</p>
              <!-- Temporarily disabled button
              <RouterLink :to="feature.link" class="read-more style-two">
                {{ feature.buttonText }}
                <i class="ti ti-arrow-right"></i>
              </RouterLink>
              -->
              <span class="count">{{ index + 1 }}</span>
            </div>
            <img
              src="@/assets/images/features-shape.png"
              class="features-shape"
              alt="features-shape"
            />
          </div>
        </div>
        <!-- Temporarily disabled Explore All Features button
        <div class="col-lg-12 text-center pt-4">
          <RouterLink to="/about-us" class="read-more style-two text-grey-teal">
            Explore All Our Features
            <i class="ti ti-arrow-right"></i>
          </RouterLink>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurFeatures",
  data() {
    return {
      features: [
        {
          icon: "flaticon-tv",
          title: "Premium Live TV",
          description:
            "Access over 10,000+ live channels in HD & 4K quality. From sports to news, movies to documentaries - all in one place.",
          link: "/services-details",
          buttonText: "View Channels",
        },
        {
          icon: "flaticon-content-marketing",
          title: "On-Demand Content",
          description:
            "Enjoy unlimited access to movies, TV shows, and series. Our vast library is updated daily with the latest content.",
          link: "/services-details",
          buttonText: "Browse Content",
        },
        {
          icon: "flaticon-smartphone",
          title: "Multi-Device Support",
          description:
            "Watch your favorite content on any device - Smart TV, smartphone, tablet, or computer. Stream simultaneously on multiple devices.",
          link: "/services-details",
          buttonText: "Get Started",
        },
      ],
    };
  },
});
</script>
