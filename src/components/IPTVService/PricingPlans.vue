<template>
  <div class="pricing-area ptb-100 bg-gondola">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">PRICING PLANS</span>
        <h2 class="text-white">Choose Your Perfect IPTV Plan</h2>
      </div>

      <div class="row justify-content-center">
        <!-- First row of pricing plans -->
        <div
          v-for="(plan, index) in pricingPlansRow1"
          :key="index"
          class="col-xl-3 col-md-6"
          :class="{ 'mt-4 mt-xl-0': index !== 0 }"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="pricing-single-item style-two">
            <span class="ignite d-block" v-if="plan.isPopular">
              POPULAR
            </span>
            <div
              class="pricing-content bg-mg"
              :style="{ backgroundImage: 'url(' + plan.bgImage + ')' }"
            >
              <div class="plan-name">
                <h3 class="text-white">{{ plan.title }}</h3>
              </div>
              <div class="amount">
                <h2>${{ plan.price }}</h2>
              </div>

              <ul class="ps-0 list-unstyled pricing-list">
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.devices }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.channels }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.vods }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.quality }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.freezing }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.uptime }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.support }}</span>
                </li>
              </ul>

              <a href="#" class="btn active">
                <span class="border-style">Get Started</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Second row of pricing plans -->
        <div
          v-for="(plan, index) in pricingPlansRow2"
          :key="'row2-' + index"
          class="col-xl-3 col-md-6 mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="pricing-single-item style-two">
            <span class="ignite d-block" v-if="plan.isPopular">
              POPULAR
            </span>
            <div
              class="pricing-content bg-mg"
              :style="{ backgroundImage: 'url(' + plan.bgImage + ')' }"
            >
              <div class="plan-name">
                <h3 class="text-white">{{ plan.title }}</h3>
              </div>
              <div class="amount">
                <h2>${{ plan.price }}</h2>
              </div>

              <ul class="ps-0 list-unstyled pricing-list">
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.devices }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.channels }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.vods }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.quality }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.freezing }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.uptime }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.support }}</span>
                </li>
              </ul>

              <a href="#" class="btn active">
                <span class="border-style">Get Started</span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-12 text-center mt-4 mt-lg-5">
          <p class="text-silver">
            <strong>24/7</strong> customer support and instant activation. All plans include our premium streaming quality.
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
    // Common features for all plans
    const commonFeatures = {
      channels: "Up to 15,000+ Channels",
      vods: "Up to 40,000+ Vods",
      quality: "4K Picture Quality",
      freezing: "Without Freezing",
      uptime: "99.9% Server Uptime",
      support: "24/7 Support"
    };

    // First row pricing plans
    const pricingPlansRow1 = ref([
      {
        title: "30 DAY TEST",
        price: "25",
        devices: "1 DEVICE",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-1.6065d295.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS BASIC",
        price: "45",
        devices: "1 DEVICE",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-2.69b9206b.jpg"),
        ...commonFeatures
      },
      {
        title: "6 MONTHS STANDARD",
        price: "90",
        devices: "1 DEVICE",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-3.a2ccc937.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS FAMILY",
        price: "180",
        devices: "5 DEVICES",
        isPopular: true,
        bgImage: require("@/assets/images/pricing-bg-1.6065d295.jpg"),
        ...commonFeatures
      }
    ]);

    // Second row pricing plans
    const pricingPlansRow2 = ref([
      {
        title: "3 MONTHS DUO",
        price: "90",
        devices: "2 DEVICES",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-2.69b9206b.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS TRIO",
        price: "120",
        devices: "3 DEVICES",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-3.a2ccc937.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS QUAD",
        price: "150",
        devices: "4 DEVICES",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-1.6065d295.jpg"),
        ...commonFeatures
      },
      {
        title: "1 YEAR PREMIUM",
        price: "299",
        devices: "5 DEVICES",
        isPopular: true,
        bgImage: require("@/assets/images/pricing-bg-2.69b9206b.jpg"),
        ...commonFeatures,
        support: "Priority 24/7 Support"
      }
    ]);

    return {
      pricingPlansRow1,
      pricingPlansRow2
    };
  },
});
</script>
