<template>
  <div class="banner-video-slide">
    <video autoplay loop muted playsinline class="banner-video">
      <source src="@/assets/videos/showtime.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BannerSlideOne",
});
</script>

<style scoped>
.banner-video-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: transparent !important;
}

.banner-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.2); /* Make the video slightly brighter */
}
</style>
