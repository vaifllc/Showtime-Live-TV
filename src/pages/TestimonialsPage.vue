<template>
  <NavbarOne />
  <PageBanner
    pageTitle="TESTIMONIALS"
    subTitle="Voices of Connection: Our customers share their ISP success stories"
    :pageBannerImage="pageBannerImg"
  />
  <Testimonials />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import Testimonials from "@/components/Testimonials/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "TestimonialsPage",
  components: {
    NavbarOne,
    PageBanner,
    Testimonials,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-3.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
