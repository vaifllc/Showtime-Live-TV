<template>
  <div class="page-banner-area style-two bg-secondary overflow-hidden">
    <div class="container mw-1720">
      <div class="page-banner-content">
        <ul class="d-flex align-items-center ps-0 list-unstyled bredcrounbs">
          <li>
            <RouterLink to="/"> HOME </RouterLink>
          </li>
          <li>
            <span>PAY BILL</span>
          </li>
        </ul>
        <h2>Pay Bill</h2>
      </div>
    </div>
    <img
      src="@/assets/images/shape-20.png"
      class="shape-21 shape"
      alt="shape"
    />
    <img
      src="@/assets/images/shape-21.png"
      class="shape-22 shape"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBanner",
});
</script>
