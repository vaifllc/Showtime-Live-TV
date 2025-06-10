<template>
  <div class="searvices-area pt-100 pb-75">
    <div class="container mw-1356">
      <div
        class="section-title text-center m-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">OUR SERVICES</span>
        <h2>Let’s Find What You Need</h2>
      </div>
      <div
        class="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-between"
      >
        <RouterLink
          v-for="service in services"
          :key="service.id"
          to="/services-details"
          class="searvices-single-item"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="service.dataDelay"
        >
          <div class="hover-style1">
            <div class="hover-style2">
              <i :class="service.icon"></i>
            </div>
          </div>
          <h3>{{ service.name }}</h3>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "OurServices",
  setup() {
    const services = ref([
      {
        id: 1,
        name: "Internet",
        icon: "flaticon-global-network",
        dataDelay: "200",
      },
      {
        id: 2,
        name: "Popular Bundles",
        icon: "flaticon-box",
        dataDelay: "300",
      },
      {
        id: 3,
        name: "TV & Streaming",
        icon: "flaticon-live",
        dataDelay: "400",
      },
      {
        id: 4,
        name: "Home Phone",
        icon: "flaticon-telephone-1",
        dataDelay: "500",
      },
      {
        id: 5,
        name: "Smart Home",
        icon: "flaticon-smart-home",
        dataDelay: "600",
      },
      {
        id: 6,
        name: "Mobile",
        icon: "flaticon-phone-call-2",
        dataDelay: "700",
      },
    ]);

    return { services };
  },
});
</script>
