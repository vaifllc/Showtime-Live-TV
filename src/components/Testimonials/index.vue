<template>
  <div class="testimonial-area ptb-100 position-relative z-1">
    <div class="container">
      <div class="section-title mw-860 m-auto text-center">
        <span class="top-title">TESTIMONIALS</span>
        <h2>Being nice shouldn’t be an afterthought</h2>
        <p>
          The reviews are in and we’re as obsessed with your internet as you
          are.
        </p>
      </div>
    </div>

    <div class="container mw-1356">
      <div class="masonrow">
        <div
          class="item"
          v-for="(testimonial, index) in paginatedTestimonials"
          :key="index"
        >
          <div class="testimonial-single-item">
            <ul class="ps-0 list-unstyled d-flex gap-1">
              <li v-for="star in 5" :key="star">
                <i class="ri-star-fill"></i>
              </li>
            </ul>
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.review }}</p>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination-area text-center mt-4">
        <span
          class="next page-numbers"
          :class="{ disabled: currentPage === 1 }"
          @click="prevPage"
        >
          <i class="ri-arrow-left-s-line"></i>
        </span>

        <span
          v-for="page in totalPages"
          :key="page"
          class="page-numbers"
          :class="{ current: currentPage === page }"
          @click="goToPage(page)"
        >
          {{ page }}
        </span>

        <span
          class="next page-numbers"
          :class="{ disabled: currentPage === totalPages }"
          @click="nextPage"
        >
          <i class="ri-arrow-right-s-line"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Testimonial {
  name: string;
  review: string;
  rating: number;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Testimonials",
  setup() {
    const testimonials = ref<Testimonial[]>([
      {
        name: "Andrew",
        rating: 5,
        review:
          "You’re affiliated with Groupe TAQ. I myself have multiple sclerosis and I am very humbled that I am helping oxio help TAQ.",
      },
      {
        name: "Britteney",
        rating: 5,
        review:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
      },
      {
        name: "Sinthia",
        rating: 5,
        review:
          "You’re affiliated with Groupe TAQ. I myself have multiple sclerosis and I am very humbled that I am helping oxio help TAQ.",
      },
      {
        name: "Jonathon",
        rating: 5,
        review:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
      },
      {
        name: "Tim",
        rating: 5,
        review:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off!",
      },
      {
        name: "Loren Watson",
        rating: 5,
        review:
          "Even though I ended up staying with Nestor, I want to commend Sara for her professionalism, knowledge, patience and excellent service. Their service is really beyond expectation.",
      },
      {
        name: "Emma S.",
        rating: 5,
        review:
          "Switching to this ISP was a game-changer for my small business. The reliable broadband connection has not only improved our day-to-day operations but also opened new opportunities for online growth. Truly a partner in our success!",
      },
      {
        name: "Sarah R.",
        rating: 5,
        review:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
      },
      {
        name: "Tim",
        rating: 5,
        review:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off!",
      },
      {
        name: "Jason T.",
        rating: 5,
        review:
          "I'm a self-proclaimed streaming addict, and this ISP has elevated my binge-watching game. Buffering is now a thing of the past, and the HD quality is stunning. A must-have for any entertainment enthusiast!",
      },
      {
        name: "Linda K.",
        rating: 5,
        review:
          "Living in a rural area, I never thought I'd have access to high-speed internet. Thanks to this ISP, I can now enjoy a reliable connection that keeps me connected to the world. It's been a game-changer for our community!",
      },
      {
        name: "Michael H.",
        rating: 5,
        review:
          "As someone who works with technology every day, I can't emphasize enough how impressed I am with the tech infrastructure this ISP has in place. Cutting-edge and forward-thinking, they truly understand the needs of the modern professional.",
      },
      {
        name: "Andrew",
        rating: 5,
        review:
          "You’re affiliated with Groupe TAQ. I myself have multiple sclerosis and I am very humbled that I am helping oxio help TAQ.",
      },
      {
        name: "Britteney",
        rating: 5,
        review:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
      },
      {
        name: "Sinthia",
        rating: 5,
        review:
          "You’re affiliated with Groupe TAQ. I myself have multiple sclerosis and I am very humbled that I am helping oxio help TAQ.",
      },
      {
        name: "Jonathon",
        rating: 5,
        review:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
      },
      {
        name: "Tim",
        rating: 5,
        review:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off!",
      },
      {
        name: "Loren Watson",
        rating: 5,
        review:
          "Even though I ended up staying with Nestor, I want to commend Sara for her professionalism, knowledge, patience and excellent service. Their service is really beyond expectation.",
      },
      {
        name: "Emma S.",
        rating: 5,
        review:
          "Switching to this ISP was a game-changer for my small business. The reliable broadband connection has not only improved our day-to-day operations but also opened new opportunities for online growth. Truly a partner in our success!",
      },
      {
        name: "Sarah R.",
        rating: 5,
        review:
          "Even though I ended up staying with Rogers, I want to commend Sara for her professionalism, knowledge, patience and excellent service.",
      },
      {
        name: "Tim",
        rating: 5,
        review:
          "Don't give up, you guys are doing a lot of good in an industry that needs the competition and a good dusting off!",
      },
      {
        name: "Jason T.",
        rating: 5,
        review:
          "I'm a self-proclaimed streaming addict, and this ISP has elevated my binge-watching game. Buffering is now a thing of the past, and the HD quality is stunning. A must-have for any entertainment enthusiast!",
      },
      {
        name: "Linda K.",
        rating: 5,
        review:
          "Living in a rural area, I never thought I'd have access to high-speed internet. Thanks to this ISP, I can now enjoy a reliable connection that keeps me connected to the world. It's been a game-changer for our community!",
      },
      {
        name: "Michael H.",
        rating: 5,
        review:
          "As someone who works with technology every day, I can't emphasize enough how impressed I am with the tech infrastructure this ISP has in place. Cutting-edge and forward-thinking, they truly understand the needs of the modern professional.",
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(9);

    const totalPages = computed(() =>
      Math.ceil(testimonials.value.length / itemsPerPage.value)
    );

    const paginatedTestimonials = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return testimonials.value.slice(start, end);
    });

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return {
      testimonials,
      currentPage,
      paginatedTestimonials,
      totalPages,
      goToPage,
      nextPage,
      prevPage,
    };
  },
});
</script>
