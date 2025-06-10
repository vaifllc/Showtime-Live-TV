<template>
  <NavbarFour
    class="ott-platform-navbar"
    className="container mw-1685"
    autoStyle="ms-auto"
  />
  <MainBanner />
  <LatestMovies />
  <WhatMakesUsDifferent />
  <MoreToStream />
  <ThatMadeForYou />
  <CustomizeYourExperience />
  <PricingPlans />
  <OurReviews />
  <FrequentlyAskedQuestions />
  <SubscribeNow />
  <MainFooter
    class="bg-secondary bg-img"
    :style="{ backgroundImage: `url(${bgImage})` }"
  />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import NavbarFour from "@/components/Layouts/NavbarFour.vue";
import MainBanner from "@/components/OTTPlatform/MainBanner.vue";
import LatestMovies from "@/components/OTTPlatform/LatestMovies.vue";
import WhatMakesUsDifferent from "@/components/OTTPlatform/WhatMakesUsDifferent.vue";
import MoreToStream from "@/components/OTTPlatform/MoreToStream.vue";
import ThatMadeForYou from "@/components/OTTPlatform/ThatMadeForYou.vue";
import CustomizeYourExperience from "@/components/OTTPlatform/CustomizeYourExperience.vue";
import PricingPlans from "@/components/OTTPlatform/PricingPlans.vue";
import OurReviews from "@/components/OTTPlatform/OurReviews.vue";
import FrequentlyAskedQuestions from "@/components/OTTPlatform/FrequentlyAskedQuestions.vue";
import SubscribeNow from "@/components/OTTPlatform/SubscribeNow.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "OTTPlatformPage",
  components: {
    NavbarFour,
    MainBanner,
    LatestMovies,
    WhatMakesUsDifferent,
    MoreToStream,
    ThatMadeForYou,
    CustomizeYourExperience,
    PricingPlans,
    OurReviews,
    FrequentlyAskedQuestions,
    SubscribeNow,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bgImage = require("@/assets/images/footer-shape.png");
    onMounted(() => {
      document.body.classList.add("ott-platform-demo-with-bg");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("ott-platform-demo-with-bg");
    });
    return { bgImage };
  },
});
</script>
