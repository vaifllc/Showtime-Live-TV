<template>
  <NavbarOne />
  <PageBanner
    pageTitle="CHANNEL LIST"
    subTitle="Channel List"
    :pageBannerImage="pageBannerImg"
  />
  <TheListOfChannels />
  <EnjoySports />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import TheListOfChannels from "@/components/ChannelList/TheListOfChannels.vue";
import EnjoySports from "@/components/ChannelList/EnjoySports.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ChannelListPage",
  components: {
    NavbarOne,
    PageBanner,
    TheListOfChannels,
    EnjoySports,
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
