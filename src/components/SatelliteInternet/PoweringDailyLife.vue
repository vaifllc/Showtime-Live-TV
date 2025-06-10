<template>
  <div class="about-us-area ptb-100">
    <div class="container">
      <div class="section-title mw-860">
        <span class="top-title">POWERING DAILY LIFE</span>
        <h2>DO MORE OF WHAT YOU LOVE EVERY DAY</h2>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-6 col-xxl-7">
          <div class="about-img">
            <img src="@/assets/images/about.jpg" alt="about" />
            <div class="affordable">
              <h4>Affordable Home Packages Starting At</h4>
              <h2>$ 84.00</h2>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-xxl-5">
          <div class="about-content">
            <div class="accordion style-two">
              <div
                class="accordion-item"
                v-for="(item, index) in accordionItems"
                :key="index"
                :class="{ active: activeIndex === index }"
              >
                <h2 class="accordion-header">
                  <button
                    class="accordion-button pt-0"
                    type="button"
                    :aria-expanded="activeIndex === index ? 'true' : 'false'"
                    @click="toggleAccordion(index)"
                  >
                    {{ item.title }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse show"
                  v-show="activeIndex === index"
                >
                  <div class="accordion-body">
                    <p>
                      {{ item.body }}
                    </p>
                    <ul class="ps-0 list-unstyled about-list">
                      <li
                        v-for="(listItem, i) in item.list"
                        :key="i"
                        class="d-flex align-items-center"
                      >
                        <i class="ti ti-circle-check"></i>
                        <span>{{ listItem }}</span>
                      </li>
                    </ul>

                    <RouterLink to="/pricing-plan" class="btn">
                      <span class="border-style">Shop Internet Plans</span>
                    </RouterLink>
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
  name: "PoweringDailyLife",
  setup() {
    const activeIndex = ref<number>(0);

    const toggleAccordion = (index: number) => {
      activeIndex.value = activeIndex.value === index ? -1 : index;
    };

    const accordionItems = [
      {
        title: "Save On Internet With Mobile",
        body: "WFH life gets easier from the company that has America’s fastest download speeds on a fiber-powered network.",
        list: [
          "Connect several devices at once",
          "Gig download speeds available everywhere",
          "Wall-to-wall wifi connection",
        ],
      },
      {
        title: "Zoom Through The Day",
        body: "WFH life gets easier from the company that has America’s fastest download speeds on a fiber-powered network.",
        list: [
          "Connect several devices at once",
          "Gig download speeds available everywhere",
          "Wall-to-wall wifi connection",
        ],
      },
      {
        title: "Game Your System",
        body: "WFH life gets easier from the company that has America’s fastest download speeds on a fiber-powered network.",
        list: [
          "Connect several devices at once",
          "Gig download speeds available everywhere",
          "Wall-to-wall wifi connection",
        ],
      },
      {
        title: "Stream Your Fave Flicks",
        body: "WFH life gets easier from the company that has America’s fastest download speeds on a fiber-powered network.",
        list: [
          "Connect several devices at once",
          "Gig download speeds available everywhere",
          "Wall-to-wall wifi connection",
        ],
      },
    ];

    return {
      activeIndex,
      toggleAccordion,
      accordionItems,
    };
  },
});
</script>
