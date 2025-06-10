<template>
  <div class="ott-platform-slider-bottom">
    <div class="title">
      <h5>WATCH TEASER & TRAILER</h5>
    </div>
    <div class="d-flex align-items-center">
      <!-- <div class="item">
        <img src="@/assets/images/ott-platform/img1.jpg" alt="image" />
        <a
          data-fslightbox="video"
          class="video-btn"
          href="https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30"
        >
          <i class="ri-play-fill"></i>
        </a>
      </div>
      <div class="item">
        <img src="@/assets/images/ott-platform/img2.jpg" alt="image" />
        <a
          data-fslightbox="video2"
          class="video-btn"
          href="https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30"
        >
          <i class="ri-play-fill"></i>
        </a>
      </div> -->

      <lightgallery :settings="{ speed: 500, plugins }" @onInit="onInit">
        <a
          v-for="(video, index) in videos"
          :key="index"
          :href="video.url"
          class="video-btn"
        >
          <img :src="video.thumbnail" :alt="'Video ' + (index + 1)" />
          <i class="ri-play-fill"></i>
        </a>
      </lightgallery>

      <div class="item">
        <div class="arrow-btn">
          <RouterLink to="/channel-list">
            <i class="ri-arrow-right-line"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Lightgallery from "lightgallery/vue";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

const plugins = ref([lgVideo]);

const videos = ref([
  {
    url: "https://www.youtube.com/watch?v=e1GrRouA5D8",
    thumbnail: require("@/assets/images/ott-platform/img1.jpg"),
  },
  {
    url: "https://www.youtube.com/watch?v=e1GrRouA5D8",
    thumbnail: require("@/assets/images/ott-platform/img2.jpg"),
  },
]);

const onInit = () => console.log("lightGallery initialized");
</script>
