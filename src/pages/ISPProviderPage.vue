<template>
  <NavbarOne />
  <MainBanner />
  <StreetAddressesApartments />
  <OurServices />
  <BlastOff />
  <PoweringDailyLife />
  <WhyChooseUs />
  <PartnerLogo />
  <PricingPlans />
  <OurTestimonial />
  <OurLatestArticles class="pt-100" />
  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarOne from "@/components/Layouts/NavbarOne.vue";
import MainBanner from "@/components/ISPProvider/MainBanner.vue";
import StreetAddressesApartments from "@/components/ISPProvider/StreetAddressesApartments.vue";
import OurServices from "@/components/ISPProvider/OurServices.vue";
import BlastOff from "@/components/ISPProvider/BlastOff.vue";
import PoweringDailyLife from "@/components/ISPProvider/PoweringDailyLife.vue";
import WhyChooseUs from "@/components/ISPProvider/WhyChooseUs.vue";
import PartnerLogo from "@/components/ISPProvider/PartnerLogo.vue";
import PricingPlans from "@/components/ISPProvider/PricingPlans.vue";
import OurTestimonial from "@/components/ISPProvider/OurTestimonial.vue";
import OurLatestArticles from "@/components/Common/OurLatestArticles.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ISPProviderPage",
  components: {
    NavbarOne,
    MainBanner,
    StreetAddressesApartments,
    OurServices,
    BlastOff,
    PoweringDailyLife,
    WhyChooseUs,
    PartnerLogo,
    PricingPlans,
    OurTestimonial,
    OurLatestArticles,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
});
</script>
