<template>
  <div class="pricing-area pb-100">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 class="text-white">Our Affordable Pricing Plans</h2>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="index"
          class="col-xl-4 col-md-6"
          :class="{ 'mt-4 mt-xl-0': index !== 0 }"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="pricing-single-item style-two">
            <span class="ignite d-block">
              Get Ignite Streaming For $5/Month
            </span>
            <div
              class="pricing-content bg-mg"
              :style="{ backgroundImage: 'url(' + plan.bgImage + ')' }"
            >
              <img :src="plan.image" :alt="plan.months + ' pricing'" />
              <div class="amount">
                <span class="months">{{ plan.months }}</span>
                <h2>${{ plan.price }}</h2>
                <span class="renew">No Auto-renew</span>
              </div>

              <ul class="ps-0 list-unstyled pricing-list">
                <li
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="d-flex justify-content-between align-items-center"
                >
                  <span>{{ feature.name }}</span>
                  <i
                    class="ti ti-circle-check"
                    :class="{ 'opacity-25': !feature.included }"
                  ></i>
                </li>
              </ul>

              <RouterLink to="/contact-us" class="btn active">
                <span class="border-style">Subscribe Now</span>
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-lg-12 text-center mt-4 mt-lg-5">
          <p class="text-silver">
            <strong>100%</strong> money-back guarantee for your first 24 Hours.
            <RouterLink
              to="/services"
              class="read-more style-two text-grey-teal"
            >
              Learn More <i class="ti ti-arrow-right"></i>
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PricingPlans",
  setup() {
    const pricingPlans = ref([
      {
        months: "3 Months",
        price: "34.99",
        bgImage: require("@/assets/images/pricing-bg-1.jpg"),
        image: require("@/assets/images/pricing-1.png"),
        features: [
          { name: "Live TV and EPG Guide", included: true },
          { name: "Movies and VOD Shows", included: true },
          { name: "Compatible with all devices", included: true },
          { name: "Anti-Freeze Technology", included: false },
          { name: "PPV and Sports Events", included: false },
        ],
      },
      {
        months: "6 Months",
        price: "54.99",
        bgImage: require("@/assets/images/pricing-bg-2.jpg"),
        image: require("@/assets/images/pricing-2.png"),
        features: [
          { name: "Live TV and EPG Guide", included: true },
          { name: "Movies and VOD Shows", included: true },
          { name: "Compatible with all devices", included: true },
          { name: "Anti-Freeze Technology", included: false },
          { name: "PPV and Sports Events", included: true },
        ],
      },
      {
        months: "12 Months",
        price: "74.99",
        bgImage: require("@/assets/images/pricing-bg-3.jpg"),
        image: require("@/assets/images/pricing-3.png"),
        features: [
          { name: "Live TV and EPG Guide", included: true },
          { name: "Movies and VOD Shows", included: true },
          { name: "Compatible with all devices", included: true },
          { name: "Anti-Freeze Technology", included: true },
          { name: "PPV and Sports Events", included: true },
        ],
      },
    ]);

    return { pricingPlans };
  },
});
</script>
