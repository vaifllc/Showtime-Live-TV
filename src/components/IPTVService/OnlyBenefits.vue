<template>
  <div class="benefits-area pt-100">
    <div class="container mw-1356">
      <div class="row">
        <div
          class="col-xl-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="benefits-img">
            <img src="@/assets/images/benefits.png" alt="benefits" />
            <div class="review mb-minus-53">
              <div class="review-in">
                <span>EXPERIENCE OF</span>
                <h1>{{ experienceYears }} Yrs</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="benefits-content">
            <span class="top-title">BENEFITS</span>
            <h2 class="text-white">Only benefits</h2>

            <div class="row">
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1000"
                :data-aos-delay="200 + (index % 2) * 100"
              >
                <div class="d-flex benefits-single-item">
                  <div class="flex-shrink-0">
                    <i :class="benefit.icon"></i>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h3>{{ benefit.title }}</h3>
                    <p>{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
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
  name: "OnlyBenefits",
  setup() {
    const experienceYears = ref(10);

    const benefits = ref([
      {
        icon: "flaticon-antena",
        title: "Top Rated Channels",
        description:
          "Enjoy Top rated TV channels with the best streaming experience.",
      },
      {
        icon: "flaticon-wifi-router",
        title: "Fast Connected",
        description:
          "Once you sign up, you get access instantly with the same login credentials.",
      },
      {
        icon: "flaticon-24-hours",
        title: "Support 24/7",
        description: "Get a 24 hours 7 days a week Technical Support.",
      },
      {
        icon: "flaticon-privacy-policy",
        title: "Privacy & Security",
        description:
          "With one-time payments and 256-Bit encryption module, your minimal data is safe.",
      },
      {
        icon: "flaticon-smart-tv",
        title: "DIY Installations",
        description:
          "No need to be 'Tech Savvy'. Just download the app on your TV and follow the simple instructions.",
      },
      {
        icon: "flaticon-best-price",
        title: "Best Pricing Plans",
        description:
          "You will not find a second place to save money with such Quality Standards.",
      },
    ]);

    return {
      experienceYears,
      benefits,
    };
  },
});
</script>
