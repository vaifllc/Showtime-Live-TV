<template>
  <div class="sidebar-wedget-wrap">
    <div class="sidebar-wedget internet">
      <span class="top-title">INTERNET SERVICE</span>
      <h2>
        Experience connectivity without limits: Unveiling our High-Speed
        internet services
      </h2>
    </div>
    <div class="sidebar-wedget">
      <span class="top-title">OTHER SERVICES</span>
      <ul class="ps-0 mb-0 list-unstyled services">
        <li>
          <RouterLink
            to="/services-details"
            class="d-flex justify-content-between align-items-center"
          >
            <span class="name">Home Wifi</span>
            <i class="ri-arrow-right-s-fill"></i>
          </RouterLink>
        </li>
        <li>
          <a
            href="/services-details"
            class="d-flex justify-content-between align-items-center"
          >
            <span class="name">Satellite TV</span>
            <i class="ri-arrow-right-s-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="/services-details"
            class="d-flex justify-content-between align-items-center"
          >
            <span class="name">Nestor TV Box</span>
            <i class="ri-arrow-right-s-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="/services-details"
            class="d-flex justify-content-between align-items-center"
          >
            <span class="name">Mobile Connection</span>
            <i class="ri-arrow-right-s-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="/services-details"
            class="d-flex justify-content-between align-items-center"
          >
            <span class="name">Home Security</span>
            <i class="ri-arrow-right-s-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarWidget",
});
</script>
