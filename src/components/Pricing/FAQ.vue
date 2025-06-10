<template>
  <div class="faq-area ptb-100">
    <div class="container mw-1356">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="faq-content">
            <span class="top-title">FAQ</span>
            <h2>Find what you want to know</h2>
          </div>

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
                  {{ item.question }}
                </button>
              </h2>
              <div
                class="accordion-collapse collapse show"
                v-show="activeIndex === index"
              >
                <div class="accordion-body">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="faq-img">
            <img src="@/assets/images/faq-2.png" alt="faq" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FAQ",
  setup() {
    const activeIndex = ref<number>(0);

    const accordionItems = [
      {
        question: "Devices that you Support?",
        answer:
          'No need "Tech Savvy". You just download the app on your TV and you could tell what to do.',
      },
      {
        question: "How I get technical support from Nestor?",
        answer:
          'No need "Tech Savvy". You just download the app on your TV and you could tell what to do.',
      },
      {
        question: "How long before I can use the service?",
        answer:
          'No need "Tech Savvy". You just download the app on your TV and you could tell what to do.',
      },
      {
        question: "What’s about Refund Policy?",
        answer:
          'No need "Tech Savvy". You just download the app on your TV and you could tell what to do.',
      },
      {
        question: "Devices that you Support?",
        answer:
          'No need "Tech Savvy". You just download the app on your TV and you could tell what to do.',
      },
    ];

    const toggleAccordion = (index: number) => {
      activeIndex.value = activeIndex.value === index ? -1 : index;
    };

    return {
      activeIndex,
      toggleAccordion,
      accordionItems,
    };
  },
});
</script>
