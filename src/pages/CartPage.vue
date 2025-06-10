<template>
  <NavbarOne />
  <PageBanner />
  <Cart />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Cart/PageBanner.vue";
import Cart from "@/components/Cart/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "CartPage",
  components: {
    NavbarOne,
    PageBanner,
    Cart,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
});
</script>
