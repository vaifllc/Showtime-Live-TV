<template>
  <NavbarOne />
  <PageBanner />
  <Products />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/Products/PageBanner.vue";
import Products from "@/components/Products/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ProductsPage",
  components: {
    NavbarOne,
    PageBanner,
    Products,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
});
</script>
