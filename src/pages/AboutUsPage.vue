<template>
  <NavbarOne />
  <PageBanner
    pageTitle="ABOUT US"
    subTitle="Nestor is the fastest internet provider in whole Europe to the mass communication"
    :pageBannerImage="pageBannerImg"
  />
  <WhoWeAre />
  <PoweringDailyLife />
  <OurMission />
  <OurVision />
  <PartnerLogo />
  <EnjoySports />
  <FanFact />
  <FAQ />
  <OurLatestArticles />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import WhoWeAre from "@/components/AboutUs/WhoWeAre.vue";
import PoweringDailyLife from "@/components/AboutUs/PoweringDailyLife.vue";
import OurMission from "@/components/AboutUs/OurMission.vue";
import OurVision from "@/components/AboutUs/OurVision.vue";
import PartnerLogo from "@/components/AboutUs/PartnerLogo.vue";
import EnjoySports from "@/components/AboutUs/EnjoySports.vue";
import FanFact from "@/components/AboutUs/FanFact.vue";
import FAQ from "@/components/AboutUs/FAQ.vue";
import OurLatestArticles from "@/components/Common/OurLatestArticles.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "AboutUsPage",
  components: {
    NavbarOne,
    PageBanner,
    WhoWeAre,
    PoweringDailyLife,
    OurMission,
    OurVision,
    PartnerLogo,
    EnjoySports,
    FanFact,
    FAQ,
    OurLatestArticles,
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
