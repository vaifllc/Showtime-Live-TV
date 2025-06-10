<template>
  <div class="ott-faq-area pb-100">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div
          class="col-xl-7 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="ott-faq-image">
            <img src="@/assets/images/ott-platform/faq.png" alt="FAQ Image" />
            <div class="wrap-shape">
              <img
                src="@/assets/images/ott-platform/faq-shape.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>

        <div
          class="col-xl-5 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="ott-faq-content">
            <h2 class="text-white">Frequently Asked Questions</h2>
            <div class="accordion" id="accordionOTT">
              <div
                class="accordion-item"
                v-for="(faq, index) in faqs"
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
                    {{ faq.question }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse show"
                  v-show="activeIndex === index"
                >
                  <div class="accordion-body">
                    <p>{{ faq.answer }}</p>
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
  name: "FrequentlyAskedQuestions",
  setup() {
    const activeIndex = ref<number>(0);

    const faqs = ref([
      {
        question: "Devices that you support?",
        answer:
          "No need to be 'Tech Savvy'. Just download the app on your TV and follow the instructions.",
      },
      {
        question: "How do I get technical support from Nestor?",
        answer:
          "You can reach our technical support via live chat, email, or phone support.",
      },
      {
        question: "How long before I can use the service?",
        answer:
          "You can start using the service immediately after registration and payment confirmation.",
      },
      {
        question: "What about the refund policy?",
        answer:
          "Our refund policy allows you to cancel within 7 days for a full refund.",
      },
      {
        question: "Can I use multiple devices?",
        answer:
          "Yes, our service supports multiple devices including Smart TVs, mobiles, and tablets.",
      },
    ]);

    const toggleAccordion = (index: number) => {
      activeIndex.value = activeIndex.value === index ? -1 : index;
    };

    return {
      activeIndex,
      toggleAccordion,
      faqs,
    };
  },
});
</script>
