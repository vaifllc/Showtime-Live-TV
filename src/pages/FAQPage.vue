<template>
  <NavbarOne />
  <PageBanner
    pageTitle="FAQ"
    subTitle="Unveiling the answers to frequently asked questions – from technical inquiries to service customization"
    :pageBannerImage="pageBannerImg"
  />
  <FAQ />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import FAQ from "@/components/FAQ/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "FAQPage",
  components: {
    NavbarOne,
    PageBanner,
    FAQ,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-5.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
