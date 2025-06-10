<template>
  <NavbarOne />
  <PageBanner />
  <ProductDetails />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import PageBanner from "@/components/ProductDetails/PageBanner.vue";
import ProductDetails from "@/components/ProductDetails/index.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ProductDetailsPage",
  components: {
    NavbarOne,
    PageBanner,
    ProductDetails,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
});
</script>
