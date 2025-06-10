<template>
  <div class="partner-area mh-partner pb-75">
    <div class="container mw-1356">
      <div class="row justify-content-center">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="col-xxl-2 col-sm-6 col-md-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <RouterLink :to="partner.link" class="partner-bg mb-4">
            <img :src="partner.image" :alt="partner.alt" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PartnerLogo",
  setup() {
    const partners = ref([
      {
        image: require("@/assets/images/movie-home/partner1.png"),
        alt: "Partner 1",
        link: "/about-us",
      },
      {
        image: require("@/assets/images/movie-home/partner2.png"),
        alt: "Partner 2",
        link: "/about-us",
      },
      {
        image: require("@/assets/images/movie-home/partner3.png"),
        alt: "Partner 3",
        link: "/about-us",
      },
      {
        image: require("@/assets/images/movie-home/partner4.png"),
        alt: "Partner 4",
        link: "/about-us",
      },
      {
        image: require("@/assets/images/movie-home/partner5.png"),
        alt: "Partner 5",
        link: "/about-us",
      },
      {
        image: require("@/assets/images/movie-home/partner6.png"),
        alt: "Partner 6",
        link: "/about-us",
      },
    ]);

    return { partners };
  },
});
</script>
