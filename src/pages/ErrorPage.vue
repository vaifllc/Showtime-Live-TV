<template>
  <div class="error-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="error-content text-center">
            <h1>4<span>0</span>4</h1>
            <h3>Oops! page is not found</h3>
            <p>Sorry, but the page you are looking for does not exist.</p>
            <RouterLink to="/" class="btn btn-warning text-white">
              <span>Back To Homepage</span>
              <i class="ti ti-home"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorPage",
});
</script>
