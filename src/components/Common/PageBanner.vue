<template>
  <div
    :class="[
      'page-banner-area bg-secondary overflow-hidden',
      { 'hide-banner': hideBanner },
    ]"
  >
    <div class="container mw-1720">
      <div class="page-banner-content">
        <ul class="d-flex align-items-center ps-0 list-unstyled bredcrounbs">
          <li>
            <RouterLink to="/"> HOME </RouterLink>
          </li>
          <li>
            <span>{{ pageTitle }}</span>
          </li>
        </ul>
        <h2>{{ subTitle }}</h2>
      </div>
    </div>
    <div class="container mw-1356" v-if="!hideBanner">
      <div class="page-banner-img">
        <img :src="pageBannerImage" :alt="`Banner image for ${pageTitle}`" />
        <!-- <img src="@/assets/images/page-banner-2.jpg" alt="page-banner" /> -->
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
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "PageBanner",
  props: ["pageTitle", "subTitle", "pageBannerImage"],
  setup() {
    const route = useRoute();

    const hiddenRoutes = [
      "/login-register",
      "/login",
      "/register",
      "/change-password",
      "/forgot-password",
    ];

    const hideBanner = computed(() => hiddenRoutes.includes(route.path));

    return { hideBanner };
  },
});
</script>
