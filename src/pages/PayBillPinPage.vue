<template>
  <NavbarOne />
  <PageBanner />
  <PayBillPin />
  <SubscribeContent class="pt-100" />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/PayBillPin/PageBanner.vue";
import PayBillPin from "@/components/PayBillPin/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "PayBillPinPage",
  components: {
    NavbarOne,
    PageBanner,
    PayBillPin,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
});
</script>
