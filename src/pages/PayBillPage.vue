<template>
  <NavbarOne />
  <PageBanner />
  <PayBill />
  <SubscribeContent class="pt-100" />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/PayBill/PageBanner.vue";
import PayBill from "@/components/PayBill/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "PayBillPage",
  components: {
    NavbarOne,
    PageBanner,
    PayBill,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
});
</script>
