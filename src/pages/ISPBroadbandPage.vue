<template>
  <MainHeader />
  <NavbarThree />
  <MainBanner />
  <WhatMakesUsDifferent />
  <MarqueeText />
  <ProvidesNetworkAtVeryCheapPrice />
  <OurServices />
  <MoreToStream />
  <EnjoyYourTime className="text-black" />
  <PricingPlans />
  <TestOurService />
  <EnjoySports />
  <FanFact />
  <FAQ />
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
import MainBanner from "@/components/ISPBroadband/MainBanner.vue";
import WhatMakesUsDifferent from "@/components/ISPBroadband/WhatMakesUsDifferent.vue";
import MarqueeText from "@/components/ISPBroadband/MarqueeText.vue";
import ProvidesNetworkAtVeryCheapPrice from "@/components/ISPBroadband/ProvidesNetworkAtVeryCheapPrice.vue";
import OurServices from "@/components/ISPBroadband/OurServices.vue";
import MoreToStream from "@/components/ISPBroadband/MoreToStream.vue";
import EnjoyYourTime from "@/components/Common/EnjoyYourTime.vue";
import PricingPlans from "@/components/ISPBroadband/PricingPlans.vue";
import TestOurService from "@/components/ISPBroadband/TestOurService.vue";
import EnjoySports from "@/components/ISPBroadband/EnjoySports.vue";
import FanFact from "@/components/ISPBroadband/FanFact.vue";
import FAQ from "@/components/ISPBroadband/FAQ.vue";
import OurLatestArticles from "@/components/Common/OurLatestArticles.vue";
import PartnerLogo from "@/components/ISPBroadband/PartnerLogo.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ISPBroadbandPage",
  components: {
    MainHeader,
    NavbarThree,
    MainBanner,
    WhatMakesUsDifferent,
    MarqueeText,
    ProvidesNetworkAtVeryCheapPrice,
    OurServices,
    MoreToStream,
    EnjoyYourTime,
    PricingPlans,
    TestOurService,
    EnjoySports,
    FanFact,
    FAQ,
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
