<template>
  <NavbarOne />
  <PageBanner
    pageTitle="CATEGORIES"
    subTitle="Insights, trends, and expert opinions: Navigate the digital landscape with our comprehensive article"
    :pageBannerImage="pageBannerImg"
  />
  <Categories />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import Categories from "@/components/Categories/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "CategoriesPage",
  components: {
    NavbarOne,
    PageBanner,
    Categories,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-6.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
