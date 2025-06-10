<template>
  <div class="blog-area si-without-border-radius pb-75">
    <div class="container mw-1356">
      <div class="section-title mw-860 m-auto text-center">
        <span class="top-title">BLOG</span>
        <h2>OUR LATEST ARTICLES TO SHOW</h2>
      </div>

      <div class="row">
        <div
          v-for="(post, index) in blogPosts"
          :key="index"
          :class="getColumnClass(index)"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="blog-single-item transition-y">
            <RouterLink :to="post.detailsLink" class="d-block blog-img">
              <img :src="post.image" :alt="post.title" />
            </RouterLink>

            <div class="blog-content">
              <RouterLink :to="post.tagLink" class="tag">
                {{ post.category }}
              </RouterLink>
              <h3>
                <RouterLink :to="post.detailsLink">{{ post.title }}</RouterLink>
              </h3>
              <ul class="d-flex align-items-center flex-wrap ps-0 mb-0">
                <li class="d-flex align-items-center">
                  <i class="ti ti-calendar-week"></i>
                  <span>{{ post.date }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-clock"></i>
                  <span>{{ post.readTime }} mins read</span>
                </li>
              </ul>
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
  name: "OurLatestArticles",
  setup() {
    const blogPosts = ref([
      {
        title:
          "Make Your Streaming More Enjoyable At Once By Using The Fastest Internet In Canada",
        category: "COMMUNITY",
        date: "23 Jan, 2025",
        readTime: 5,
        image: require("@/assets/images/blog-1.jpg"),
        detailsLink: "/blog-details",
        tagLink: "/tags",
      },
      {
        title: "How Reliable Internet Access Shapes Our World",
        category: "KNOWLEDGE",
        date: "22 Jan, 2025",
        readTime: 3,
        image: require("@/assets/images/blog-2.jpg"),
        detailsLink: "/blog-details",
        tagLink: "/tags",
      },
      {
        title: "Supercharge Your Online Experience: The Top 5 F...",
        category: "KNOWLEDGE",
        date: "21 Jan, 2025",
        readTime: 2,
        image: require("@/assets/images/blog-3.jpg"),
        detailsLink: "/blog-details",
        tagLink: "/tags",
      },
    ]);

    const getColumnClass = (index: number) => {
      return index === 0 ? "col-lg-6" : "col-lg-3 col-md-6";
    };

    return {
      blogPosts,
      getColumnClass,
    };
  },
});
</script>
