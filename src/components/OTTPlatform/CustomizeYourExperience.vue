<template>
  <div class="ott-add-ons-area ptb-100">
    <div class="container">
      <div
        class="section-title mw-526 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 class="text-white">Customize Your Experience With Add-ons</h2>
      </div>

      <div class="row justify-content-center align-items-center">
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="ott-add-ons-image">
            <img src="@/assets/images/ott-platform/add-ons.jpg" alt="image" />
          </div>
        </div>

        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="ott-add-ons-content">
            <div class="accordion" id="accordionOns">
              <div
                v-for="(addon, index) in addons"
                :key="index"
                class="accordion-item"
                :class="{ active: activeIndex === index }"
              >
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    :aria-expanded="activeIndex === index ? 'true' : 'false'"
                    @click="toggleAccordion(index)"
                  >
                    {{ addon.title }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse show"
                  v-show="activeIndex === index"
                >
                  <div class="accordion-body">
                    <p>{{ addon.description }}</p>
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
  name: "CustomizeYourExperience",
  setup() {
    const activeIndex = ref<number>(0); // To store which accordion is active

    const toggleAccordion = (index: number) => {
      activeIndex.value = activeIndex.value === index ? -1 : index;
    };

    const addons = ref([
      {
        title: "Add-ons for everyone",
        description:
          "Explore add-ons to get more features, more premium TV, more entertainment, more live sports, and more Spanish TV.",
      },
      {
        title: "More features and 4K",
        description: "Upgrade to 4K streaming and enhanced features.",
      },
      {
        title: "More premium TV",
        description: "Access premium channels for an enhanced experience.",
      },
      {
        title: "More entertainment",
        description: "Enjoy a wide variety of entertainment content.",
      },
      {
        title: "More Spanish TV",
        description: "Get access to Spanish-language TV channels and shows.",
      },
      {
        title: "More live sports",
        description: "Watch live sports events anytime, anywhere.",
      },
    ]);

    return {
      activeIndex,
      toggleAccordion,
      addons,
    };
  },
});
</script>
