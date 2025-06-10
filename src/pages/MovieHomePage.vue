<template>
  <NavbarFour
    class="movie-home-navbar"
    className="container-fluid"
    autoStyle="m-auto"
  />
  <MainBanner />
  <TopMoviesToday />
  <UpcomingMovies />
  <TopRatedToday />
  <WhatMadeExtraordinary />
  <EnjoyTheAllMovies />
  <SpecialMovies />
  <PartnerLogo />
  <RecommendedForYou />
  <FAQ />
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
import MainBanner from "@/components/MovieHome/MainBanner.vue";
import TopMoviesToday from "@/components/MovieHome/TopMoviesToday.vue";
import UpcomingMovies from "@/components/MovieHome/UpcomingMovies.vue";
import TopRatedToday from "@/components/MovieHome/TopRatedToday.vue";
import WhatMadeExtraordinary from "@/components/MovieHome/WhatMadeExtraordinary.vue";
import EnjoyTheAllMovies from "@/components/MovieHome/EnjoyTheAllMovies.vue";
import SpecialMovies from "@/components/MovieHome/SpecialMovies.vue";
import PartnerLogo from "@/components/MovieHome/PartnerLogo.vue";
import RecommendedForYou from "@/components/MovieHome/RecommendedForYou.vue";
import FAQ from "@/components/MovieHome/FAQ.vue";
import SubscribeNow from "@/components/MovieHome/SubscribeNow.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "MovieHomePage",
  components: {
    NavbarFour,
    MainBanner,
    TopMoviesToday,
    UpcomingMovies,
    TopRatedToday,
    WhatMadeExtraordinary,
    EnjoyTheAllMovies,
    SpecialMovies,
    PartnerLogo,
    RecommendedForYou,
    FAQ,
    SubscribeNow,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bgImage = require("@/assets/images/footer-shape.png");
    onMounted(() => {
      document.body.classList.add("movie-home-demo-with-bg");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("movie-home-demo-with-bg");
    });
    return { bgImage };
  },
});
</script>
