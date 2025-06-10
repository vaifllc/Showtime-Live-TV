<template>
  <NavbarOne />
  <PageBanner
    pageTitle="BLOG DETAILS"
    subTitle="Supercharge your online experience: The top 5 features to look for in an ISP"
    :pageBannerImage="pageBannerImg"
  />
  <BlogDetails />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import BlogDetails from "@/components/BlogDetails/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "BlogDetailsPage",
  components: {
    NavbarOne,
    PageBanner,
    BlogDetails,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-9.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
