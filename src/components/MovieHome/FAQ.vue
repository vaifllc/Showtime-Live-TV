<template>
  <div class="movies-faq-area pb-100">
    <div class="container">
      <div
        class="section-title text-center mw-860 m-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 class="text-white">Questions? We Are Here To Help</h2>
        <p class="text-white">
          The reviews are in and we're as obsessed with your internet as you
          are.
        </p>
      </div>
      <div
        class="row justify-content-center g-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div
          v-for="(faqList, index) in faqGroups"
          :key="index"
          class="col-lg-6 col-md-12"
        >
          <div class="movies-faq-content">
            <div class="accordion">
              <div
                class="accordion-item"
                v-for="(faq, idx) in faqList"
                :key="idx"
                :class="{ active: activeIndexes[index] === idx }"
              >
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    :aria-expanded="
                      activeIndexes[index] === idx ? 'true' : 'false'
                    "
                    @click="toggleAccordion(index, idx)"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div
                  class="accordion-collapse collapse show"
                  v-show="activeIndexes[index] === idx"
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
      <div class="movies-faq-bottom-title">
        <span>
          Did not find your answer?
          <RouterLink to="/contact-us">Ask Here</RouterLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FAQ",
  setup() {
    const activeIndexes = ref<number[]>(new Array(2).fill(-1));
    activeIndexes.value[0] = 0;
    activeIndexes.value[1] = 0;

    const faqGroups = ref([
      [
        {
          question: "Devices that you Support?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
        {
          question: "How do I get technical support from Nestor?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
        {
          question: "How long before I can use the service?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
        {
          question: "What's about Refund Policy?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
      ],
      [
        {
          question: "How do I get started with Nestor TV?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
        {
          question: "Which devices can I watch Nestor TV on?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
        {
          question: "Can I watch Nestor TV while traveling?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
        {
          question: "Are there really no DVR storage space limits?",
          answer:
            "No need to be tech-savvy. Just download the app on your TV and follow the instructions.",
        },
      ],
    ]);

    const toggleAccordion = (groupIndex: number, itemIndex: number) => {
      activeIndexes.value[groupIndex] =
        activeIndexes.value[groupIndex] === itemIndex ? -1 : itemIndex;
    };

    return {
      activeIndexes,
      toggleAccordion,
      faqGroups,
    };
  },
});
</script>
