<template>
  <NavbarTwo />
  <PageBanner
    pageTitle="SERVICES"
    subTitle="Find the perfect network solution at best price from us"
    :pageBannerImage="pageBannerImg"
  />
  <OurServices />
  <PricingPlans />
  <TestOurService />
  <FAQ />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import OurServices from "@/components/Services/OurServices.vue";
import PricingPlans from "@/components/Services/PricingPlans.vue";
import TestOurService from "@/components/Services/TestOurService.vue";
import FAQ from "@/components/Services/FAQ.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ServicesPage",
  components: {
    NavbarTwo,
    PageBanner,
    OurServices,
    PricingPlans,
    TestOurService,
    FAQ,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-2.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
