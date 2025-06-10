<template>
  <div
    class="services-area-three si-without-border-radius bg-secondary ptb-100"
  >
    <div class="container">
      <div
        class="section-title text-center m-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">OUR SERVICES</span>
        <h2 class="text-white">LET'S FIND WHAT YOU NEED</h2>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="position-relative z-1 shape-wrap">
            <div class="services-single-item-three hover-style1">
              <div class="hover-style2">
                <i :class="service.icon" class="icon"></i>
                <h3>
                  <RouterLink to="/services-details">
                    {{ service.title }}
                  </RouterLink>
                </h3>
                <p>{{ service.description }}</p>
                <RouterLink
                  to="/services-details"
                  class="read-more style-two text-grey-teal"
                >
                  Learn More
                  <i class="ti ti-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
            <img
              src="@/assets/images/services-shape.png"
              class="services-shape d-none d-xl-block"
              alt="services-shape"
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
  name: "OurServices",
  setup() {
    const services = ref([
      {
        title: "Broadband Internet",
        description: "Our Best broadband service offer high-quality streaming.",
        icon: "flaticon-global-network",
      },
      {
        title: "Home Wifi",
        description: "Our Best broadband service offer high-quality streaming.",
        icon: "flaticon-box",
      },
      {
        title: "Satellite TV",
        description: "Our Best broadband service offer high-quality streaming.",
        icon: "flaticon-global-network",
      },
      {
        title: "Nestor TV Box",
        description: "Our Best broadband service offer high-quality streaming.",
        icon: "flaticon-global-network",
      },
      {
        title: "Mobile Connection",
        description: "Our Best broadband service offer high-quality streaming.",
        icon: "flaticon-phone-call-2",
      },
      {
        title: "Home Security",
        description: "Our Best broadband service offer high-quality streaming.",
        icon: "flaticon-smart-home",
      },
    ]);

    return { services };
  },
});
</script>
