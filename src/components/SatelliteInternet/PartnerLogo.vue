<template>
  <div class="partner-area pb-75">
    <div class="container mw-1356">
      <div class="row justify-content-center">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="col-xxl-2 col-sm-6 col-md-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="(index + 1) * 100"
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
        image: require("@/assets/images/partner-1.png"),
        link: "/about-us",
        alt: "Partner 1",
      },
      {
        image: require("@/assets/images/partner-2.png"),
        link: "/about-us",
        alt: "Partner 2",
      },
      {
        image: require("@/assets/images/partner-3.png"),
        link: "/about-us",
        alt: "Partner 3",
      },
      {
        image: require("@/assets/images/partner-4.png"),
        link: "/about-us",
        alt: "Partner 4",
      },
      {
        image: require("@/assets/images/partner-5.png"),
        link: "/about-us",
        alt: "Partner 5",
      },
      {
        image: require("@/assets/images/partner-6.png"),
        link: "/about-us",
        alt: "Partner 6",
      },
    ]);

    return { partners };
  },
});
</script>
