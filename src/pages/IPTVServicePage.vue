<template>
  <NavbarTwo />
  <MainBanner />
  <WhoWeAre />
  <OurFeatures />
  <OurContent />
  <EnjoyYourTime class="bg-gondola3" className="text-white" />
  <TVChannels class="bg-gondola3" className="text-white" />
  <FavoriteMatch />
  <PricingPlans />
  <TestOurService />
  <OnlyBenefits />
  <OurTestimonial />
  <FanFact />
  <FAQ />
  <MainFooter
    class="bg-secondary bg-img"
    :style="{ backgroundImage: `url(${bgImage})` }"
  />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import MainBanner from "@/components/IPTVService/MainBanner/index.vue";
import WhoWeAre from "@/components/IPTVService/WhoWeAre.vue";
import OurFeatures from "@/components/IPTVService/OurFeatures.vue";
import OurContent from "@/components/IPTVService/OurContent.vue";
import EnjoyYourTime from "@/components/Common/EnjoyYourTime.vue";
import TVChannels from "@/components/Common/TVChannels.vue";
import FavoriteMatch from "@/components/IPTVService/FavoriteMatch.vue";
import PricingPlans from "@/components/IPTVService/PricingPlans.vue";
import TestOurService from "@/components/IPTVService/TestOurService.vue";
import OnlyBenefits from "@/components/IPTVService/OnlyBenefits.vue";
import OurTestimonial from "@/components/IPTVService/OurTestimonial.vue";
import FanFact from "@/components/IPTVService/FanFact.vue";
import FAQ from "@/components/IPTVService/FAQ.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "IPTVServicePage",
  components: {
    NavbarTwo,
    MainBanner,
    WhoWeAre,
    OurFeatures,
    OurContent,
    EnjoyYourTime,
    TVChannels,
    //FavoriteMatch,
    PricingPlans,
    //TestOurService,
    //OnlyBenefits,
    //OurTestimonial,
    FanFact,
    //FAQ,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bgImage = require("@/assets/images/footer-shape.png");
    onMounted(() => {
      document.body.classList.add("bg-gondola");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("bg-gondola");
    });
    return { bgImage };
  },
});
</script>
