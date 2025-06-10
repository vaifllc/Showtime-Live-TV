<template>
  <div class="services-area-three bg-secondary ptb-100">
    <div class="container">
      <div
        class="section-title text-center m-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">OUR SERVICES</span>
        <h2 class="text-white">Let’s find what you need</h2>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="200 + index * 100"
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
                  Learn More <i class="ti ti-arrow-right"></i>
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
        id: 1,
        title: "Broadband Internet",
        icon: "flaticon-global-network",
        description: "Our Best broadband service offer high-quality streaming.",
      },
      {
        id: 2,
        title: "Home Wifi",
        icon: "flaticon-box",
        description: "Get seamless connectivity at home with our WiFi service.",
      },
      {
        id: 3,
        title: "Satellite TV",
        icon: "flaticon-global-network",
        description: "Enjoy hundreds of HD channels with our satellite TV.",
      },
      {
        id: 4,
        title: "Nestor TV Box",
        icon: "flaticon-global-network",
        description: "Experience seamless streaming with Nestor TV Box.",
      },
      {
        id: 5,
        title: "Mobile Connection",
        icon: "flaticon-phone-call-2",
        description: "Stay connected anywhere with our mobile network.",
      },
      {
        id: 6,
        title: "Home Security",
        icon: "flaticon-smart-home",
        description: "Secure your home with our advanced security solutions.",
      },
    ]);

    return { services };
  },
});
</script>
