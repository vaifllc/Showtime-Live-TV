<template>
  <div class="favorite-match-area bg-gondola3 position-relative z-1 bg-50">
    <div class="container mw-1356">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div
            class="favorite-match-single-item position-relative z-1 mb-4 mb-md-0 overflow-hidden hover-style1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="hover-style2">
              <h2>Don't miss your favorite match</h2>
              <RouterLink to="/pricing-plan" class="btn">
                <span class="border-style">View All Fotball Leagues</span>
              </RouterLink>
              <div class="favorite-match-img">
                <img
                  src="@/assets/images/favorite-match-1.png"
                  alt="favorite-match"
                />
              </div>
              <img
                src="@/assets/images/favorite-shape.png"
                class="favorite-shape"
                alt="favorite-shape"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div
            class="favorite-match-single-item position-relative z-1 overflow-hidden hover-style1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="hover-style2">
              <div class="favorite-match-img-2">
                <img
                  src="@/assets/images/favorite-match-2.png"
                  alt="favorite-match"
                />
              </div>
              <h2>Don't miss any updated news</h2>
              <RouterLink to="/pricing-plan" class="btn">
                <span class="border-style">View All News Channel</span>
              </RouterLink>
              <img
                src="@/assets/images/favorite-shape-2.png"
                class="favorite-shape"
                alt="favorite-shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <img src="@/assets/images/shape-8.png" class="shape shape-8" alt="shape" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FavoriteMatch",
});
</script>
