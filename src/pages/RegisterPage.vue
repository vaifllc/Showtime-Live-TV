<template>
  <NavbarTwo />
  <PageBanner
    pageTitle="REGISTER"
    subTitle="Register Your Account"
    :pageBannerImage="pageBannerImg"
  />
  <Register />
  <SubscribeContent class="pt-100" />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import Register from "@/components/Register/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "RegisterPage",
  components: {
    NavbarTwo,
    PageBanner,
    Register,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pageBannerImg = require("@/assets/images/page-banner-4.jpg");

    return {
      pageBannerImg,
    };
  },
});
</script>
