<template>
  <div class="page-banner-area bg-secondary">
    <div class="container mw-1720">
      <div class="page-banner-content">
        <ul class="d-flex align-items-center ps-0 list-unstyled bredcrounbs">
          <li>
            <RouterLink to="/"> HOME </RouterLink>
          </li>
          <li>
            <span>SHOP</span>
          </li>
        </ul>
        <h2>
          Explore, choose, and elevate your digital lifestyle: dive into a world
          of possibilities with our shop
        </h2>
      </div>
    </div>

    <div class="container mw-1356">
      <div
        class="blast-off-bg bg-img rounded-2"
        :style="{
          backgroundImage: `url(${require('@/assets/images/blast-off-bg.jpg')})`,
        }"
      >
        <div class="row align-items-center" data-cues="zoomOut">
          <div class="col-lg-6 col-md-6">
            <div class="blast-off-content mw-100">
              <h2 class="text-golden">Blast Off With New Smart Trend Off</h2>
              <p>
                With Internet Speed upto 10 Gig, Connect, Work, & Play Like
                Never Before.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="blast-off-img">
              <img src="@/assets/images/blast-off.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/images/shape-20.png"
      class="shape-21 shape"
      alt="shape"
    />
    <img
      src="@/assets/images/shape-21.png"
      class="shape-22 shape"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBanner",
});
</script>
