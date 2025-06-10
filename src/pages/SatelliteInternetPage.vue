<template>
  <MainHeader />
  <NavbarThree />
  <MainBanner />
  <WhatMakesUsDifferent />
  <MarqueeText />
  <OurSustainableApproach />
  <OurServices />
  <PoweringDailyLife />
  <PricingPlans />
  <TestOurService />
  <OurTestimonial />
  <EnjoySports />
  <FanFact />
  <CheckAvailability />
  <OurLatestArticles />
  <PartnerLogo />
  <MainFooter
    class="bg-secondary bg-img"
    :style="{ backgroundImage: `url(${bgImage})` }"
  />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/Layouts/MainHeader.vue";
import NavbarThree from "@/components/Layouts/NavbarThree.vue";
import MainBanner from "@/components/SatelliteInternet/MainBanner.vue";
import WhatMakesUsDifferent from "@/components/SatelliteInternet/WhatMakesUsDifferent.vue";
import MarqueeText from "@/components/SatelliteInternet/MarqueeText.vue";
import OurSustainableApproach from "@/components/SatelliteInternet/OurSustainableApproach.vue";
import OurServices from "@/components/SatelliteInternet/OurServices.vue";
import PoweringDailyLife from "@/components/SatelliteInternet/PoweringDailyLife.vue";
import PricingPlans from "@/components/SatelliteInternet/PricingPlans.vue";
import TestOurService from "@/components/SatelliteInternet/TestOurService.vue";
import OurTestimonial from "@/components/SatelliteInternet/OurTestimonial.vue";
import EnjoySports from "@/components/SatelliteInternet/EnjoySports.vue";
import FanFact from "@/components/SatelliteInternet/FanFact.vue";
import CheckAvailability from "@/components/SatelliteInternet/CheckAvailability.vue";
import OurLatestArticles from "@/components/SatelliteInternet/OurLatestArticles.vue";
import PartnerLogo from "@/components/SatelliteInternet/PartnerLogo.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "SatelliteInternetPage",
  components: {
    MainHeader,
    NavbarThree,
    MainBanner,
    WhatMakesUsDifferent,
    MarqueeText,
    OurSustainableApproach,
    OurServices,
    PoweringDailyLife,
    PricingPlans,
    TestOurService,
    OurTestimonial,
    EnjoySports,
    FanFact,
    CheckAvailability,
    OurLatestArticles,
    PartnerLogo,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bgImage = require("@/assets/images/footer-shape.png");
    return { bgImage };
  },
});
</script>
