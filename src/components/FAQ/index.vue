<template>
  <div class="faq-area ptb-100">
    <div class="container mw-1356">
      <div class="row">
        <div class="col-lg-6">
          <div class="faq-content">
            <span class="top-title">FAQ</span>
            <h2>Find what you want to know</h2>
          </div>

          <div class="accordion style-two">
            <div
              class="accordion-item"
              v-for="(item, index) in faqItems"
              :key="index"
              :class="{ active: activeIndex === index }"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
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

        <div class="col-lg-6">
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

    const faqItems = ref([
      {
        question: "Devices that you Support?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "How I get technical support from Nestor?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "How long before I can use the service?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "What’s about Refund Policy?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "What types of internet connections do you offer?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "Can I upgrade or downgrade my plan at any time?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "What measures do you have in place to ensure the security?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
      {
        question: "What additional features come with your broadband plans?",
        answer:
          "No need 'Tech Savvy'. You just download the app on your TV and you could tell what to do.",
      },
    ]);

    const toggleAccordion = (index: number) => {
      activeIndex.value = activeIndex.value === index ? -1 : index;
    };

    return {
      faqItems,
      activeIndex,
      toggleAccordion,
    };
  },
});
</script>
