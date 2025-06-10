<template>
  <NavbarOne />
  <PageBanner
    pageTitle="SERVICES DETAILS"
    subTitle="Explore our high-speed internet services tailored to elevate your digital experience"
    :pageBannerImage="pageBannerImg"
  />
  <ServicesDetails />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import ServicesDetails from "@/components/ServicesDetails/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ServicesDetailsPage",
  components: {
    NavbarOne,
    PageBanner,
    ServicesDetails,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-8.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
