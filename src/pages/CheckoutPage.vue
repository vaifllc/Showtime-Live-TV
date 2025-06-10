<template>
  <NavbarOne />
  <PageBanner
    pageTitle="SHOP"
    subTitle="Explore, choose, and elevate your digital lifestyle: dive into a world of possibilities with our shop"
    :pageBannerImage="pageBannerImg"
  />>
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Checkout/PageBanner.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "CheckoutPage",
  components: {
    NavbarOne,
    PageBanner,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-1.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
