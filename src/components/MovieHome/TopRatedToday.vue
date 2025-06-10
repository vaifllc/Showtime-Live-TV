<template>
  <div
    class="movies-video-area"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="movies-video-content">
            <span class="sub">TOP RATED TODAY</span>
            <h1>The Knight Big Riders</h1>
            <p>
              A small, secluded town nestled deep within the mountains of
              Canada. The town, Maplewood, is surrounded by dense forests, with
              only one road in and out. The local population
              <RouterLink to="/services-details">Read More</RouterLink>
            </p>
            <ul class="btn-list">
              <li>
                <RouterLink to="/pricing-plan" class="btn">
                  <span class="border-style">Watch Now</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/channel-list" class="btn">
                  <span class="border-style">See Trailer</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="movies-video-btn">
            <lightgallery :settings="{ speed: 500, plugins }">
              <a
                href="https://youtu.be/e1GrRouA5D8?si=S8NlTgzeW0HQ6m30"
                class="video-btn"
              >
                <i class="ri-play-fill"></i>
              </a>
            </lightgallery>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Lightgallery from "lightgallery/vue";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

export default defineComponent({
  name: "TopRatedToday",
  components: {
    Lightgallery,
  },
  setup() {
    const plugins = ref([lgVideo]);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const backgroundImage = require("@/assets/images/movie-home/video-bg.jpg");

    return {
      plugins,
      backgroundImage,
    };
  },
});
</script>
