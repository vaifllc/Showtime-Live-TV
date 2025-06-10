<template>
  <PreLoader v-if="isLoading" />
  <MobileNavbar />
  <SearchModal />
  <router-view />
  <CartModal />
  <!-- <RTLBtn /> -->
  <BackToUp />
  <AlertSystem />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import PreLoader from "./components/Layouts/PreLoader.vue";
import MobileNavbar from "./components/Layouts/MobileNavbar.vue";
import SearchModal from "./components/Layouts/SearchModal.vue";
import CartModal from "./components/Layouts/CartModal.vue";
import RTLBtn from "./components/Layouts/RTLBtn.vue";
import BackToUp from "./components/Layouts/BackToUp.vue";
import AlertSystem from "./components/Common/AlertSystem.vue";
import { useAuth } from "./composables/useAuth";

export default defineComponent({
  name: "App",
  components: {
    PreLoader,
    MobileNavbar,
    SearchModal,
    CartModal,
    // RTLBtn,
    BackToUp,
    AlertSystem,
  },
  setup() {
    const isLoading = ref(true);

    // Initialize auth
    const { initialized } = useAuth();

    onMounted(() => {
      // Set loading timeout
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    });

    return {
      isLoading
    };
  }
});
</script>
