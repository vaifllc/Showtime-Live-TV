<template>
  <div
    :class="[
      'offcanvas offcanvas-bottom src-offcanvas',
      { show: stateStoreInstance.active },
    ]"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fs-3">Search Your Query</h5>
      <button
        type="button"
        class="btn-close"
        @click="stateStoreInstance.searchModal"
      ></button>
    </div>

    <div class="offcanvas-body small">
      <form class="src-form position-relative">
        <input type="text" class="form-control" placeholder="Search Here" />
        <button
          type="submit"
          class="position-absolute top-50 end-0 translate-middle-y btn"
        >
          <span class="border-style">Search</span>
        </button>
      </form>
    </div>
  </div>

  <div
    :class="['offcanvas-backdrop fade', { show: stateStoreInstance.active }]"
    @click="stateStoreInstance.searchModal"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "@/utils/store";

export default defineComponent({
  name: "SearchModal",
  setup() {
    const stateStoreInstance = stateStore;

    return {
      stateStoreInstance,
    };
  },
});
</script>
