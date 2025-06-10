<template>
  <NavbarTwo />
  <PageBanner
    pageTitle="CHANGE PASSWORD"
    subTitle="Change Your Password"
    :pageBannerImage="pageBannerImg"
  />
  <ChangePassword />
  <SubscribeContent class="pt-100" />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import PageBanner from "@/components/Common/PageBanner.vue";
import ChangePassword from "@/components/ChangePassword/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ChangePasswordPage",
  components: {
    NavbarTwo,
    PageBanner,
    ChangePassword,
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
