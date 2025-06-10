<template>
  <div class="partner-area pt-100 pb-75">
    <div
      class="section-title mw-690 m-auto text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <span class="top-title">CHANNEL</span>
      <h2>Find Below The List Of Channels We Offer</h2>
    </div>

    <div class="container mw-1356">
      <div class="row justify-content-center">
        <div
          v-for="(channel, index) in channels"
          :key="index"
          class="col-xxl-2 col-sm-6 col-md-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * ((index % 6) + 1)"
        >
          <RouterLink :to="channel.link" class="partner-bg mb-4">
            <img :src="channel.image" :alt="channel.name" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TheListOfChannels",
  setup() {
    const channels = ref([
      {
        name: "Partner 1",
        image: require("@/assets/images/partner-1.png"),
        link: "/about-us",
      },
      {
        name: "Partner 2",
        image: require("@/assets/images/partner-2.png"),
        link: "/about-us",
      },
      {
        name: "Partner 3",
        image: require("@/assets/images/partner-3.png"),
        link: "/about-us",
      },
      {
        name: "Partner 4",
        image: require("@/assets/images/partner-4.png"),
        link: "/about-us",
      },
      {
        name: "Partner 5",
        image: require("@/assets/images/partner-5.png"),
        link: "/about-us",
      },
      {
        name: "Partner 6",
        image: require("@/assets/images/partner-6.png"),
        link: "/about-us",
      },
      {
        name: "Partner 7",
        image: require("@/assets/images/partner-7.png"),
        link: "/about-us",
      },
      {
        name: "Partner 8",
        image: require("@/assets/images/partner-8.png"),
        link: "/about-us",
      },
      {
        name: "Partner 9",
        image: require("@/assets/images/partner-9.png"),
        link: "/about-us",
      },
      {
        name: "Partner 10",
        image: require("@/assets/images/partner-10.png"),
        link: "/about-us",
      },
      {
        name: "Partner 11",
        image: require("@/assets/images/partner-11.png"),
        link: "/about-us",
      },
    ]);

    return { channels };
  },
});
</script>
