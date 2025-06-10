<template>
  <div class="blog-area ptb-100">
    <div class="container mw-1356">
      <div class="section-title m-auto text-center mw-860">
        <span class="top-title">BLOG</span>
        <h2>Our latest articles to show</h2>
      </div>

      <div class="row">
        <div class="col-lg-9 order-2 order-lg-1">
          <div class="row justify-content-center">
            <div
              v-for="(blog, index) in paginatedTestimonials"
              :key="index"
              class="col-xl-4 col-md-6"
            >
              <div class="blog-single-item transition-y">
                <RouterLink :to="blog.link" class="d-block blog-img">
                  <img :src="blog.image" :alt="blog.title" />
                </RouterLink>

                <div class="blog-content">
                  <RouterLink :to="blog.tagLink" class="tag">{{
                    blog.category
                  }}</RouterLink>
                  <h3>
                    <RouterLink :to="blog.link">{{ blog.title }}</RouterLink>
                  </h3>
                  <ul class="d-flex align-items-center flex-wrap ps-0 mb-0">
                    <li class="d-flex align-items-center">
                      <i class="ti ti-calendar-week"></i>
                      <span>{{ blog.date }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="ti ti-clock"></i>
                      <span>{{ blog.readTime }} mins read</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="col-lg-12">
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
        </div>

        <div class="col-lg-3 order-1 order-lg-2 mb-5 mb-lg-0">
          <SidebarWidget />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import SidebarWidget from "../Blog/SidebarWidget.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categories",
  components: {
    SidebarWidget,
  },
  setup() {
    const blogs = ref([
      {
        image: require("@/assets/images/blog-4.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Enjoyable At Once By Using...",
        link: "/blog-details",
        date: "23 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-2.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "How Reliable Internet Access Shapes Our World",
        link: "/blog-details",
        date: "22 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-3.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Supercharge Your Online Experience: The Top 5 Features...",
        link: "/blog-details",
        date: "21 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-5.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Immediately Make Your Streaming More Useful...",
        link: "/blog-details",
        date: "01 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-6.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "How Our World Is Shaped by Dependable Internet Access",
        link: "/blog-details",
        date: "02 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-7.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Boost Your Online Adventure: The Best Pleasurable With...",
        link: "/blog-details",
        date: "04 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-8.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Useful Right Away...",
        link: "/blog-details",
        date: "07 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-9.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "The Influence of Reliable Internet Access on Our World",
        link: "/blog-details",
        date: "08 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-10.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Increase Your Online Experience: The Most...",
        link: "/blog-details",
        date: "09 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-4.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Enjoyable At Once By Using...",
        link: "/blog-details",
        date: "23 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-8.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Useful Right Away...",
        link: "/blog-details",
        date: "07 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-9.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "The Influence of Reliable Internet Access on Our World",
        link: "/blog-details",
        date: "08 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-10.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Increase Your Online Experience: The Most...",
        link: "/blog-details",
        date: "09 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-2.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "How Reliable Internet Access Shapes Our World",
        link: "/blog-details",
        date: "22 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-3.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Supercharge Your Online Experience: The Top 5 Features...",
        link: "/blog-details",
        date: "21 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-5.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Immediately Make Your Streaming More Useful...",
        link: "/blog-details",
        date: "01 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-6.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "How Our World Is Shaped by Dependable Internet Access",
        link: "/blog-details",
        date: "02 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-7.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Boost Your Online Adventure: The Best Pleasurable With...",
        link: "/blog-details",
        date: "04 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-6.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "How Our World Is Shaped by Dependable Internet Access",
        link: "/blog-details",
        date: "02 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-7.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Boost Your Online Adventure: The Best Pleasurable With...",
        link: "/blog-details",
        date: "04 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-8.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Useful Right Away...",
        link: "/blog-details",
        date: "07 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-9.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "The Influence of Reliable Internet Access on Our World",
        link: "/blog-details",
        date: "08 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-10.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Increase Your Online Experience: The Most...",
        link: "/blog-details",
        date: "09 Jan, 2025",
        readTime: 2,
      },
      {
        image: require("@/assets/images/blog-4.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Enjoyable At Once By Using...",
        link: "/blog-details",
        date: "23 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-8.jpg"),
        category: "COMMUNITY",
        tagLink: "/tags",
        title: "Make Your Streaming More Useful Right Away...",
        link: "/blog-details",
        date: "07 Jan, 2025",
        readTime: 5,
      },
      {
        image: require("@/assets/images/blog-9.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "The Influence of Reliable Internet Access on Our World",
        link: "/blog-details",
        date: "08 Jan, 2025",
        readTime: 3,
      },
      {
        image: require("@/assets/images/blog-10.jpg"),
        category: "KNOWLEDGE",
        tagLink: "/tags",
        title: "Increase Your Online Experience: The Most...",
        link: "/blog-details",
        date: "09 Jan, 2025",
        readTime: 2,
      },
    ]);

    const currentPage = ref(1);
    const itemsPerPage = ref(9);

    const totalPages = computed(() =>
      Math.ceil(blogs.value.length / itemsPerPage.value)
    );

    const paginatedTestimonials = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return blogs.value.slice(start, end);
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
      blogs,
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
