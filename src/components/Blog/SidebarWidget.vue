<template>
  <div class="sidebar-wedget-wrap">
    <div class="sidebar-wedget">
      <span class="top-title">SEARCH ARTICLES</span>
      <form class="search-form position-relative z-1">
        <input type="text" class="form-control" placeholder="Search here" />
        <button
          class="src-btn position-absolute top-50 end-0 translate-middle-y"
        >
          <i class="ri-search-line"></i>
        </button>
      </form>
    </div>
    <div class="sidebar-wedget">
      <span class="top-title">CATEGORIES</span>
      <ul class="ps-0 mb-0 list-unstyled categories">
        <li>
          <RouterLink
            to="/categories"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="ri-arrow-right-s-fill"></i>
              <span class="name">Satellite TV</span>
            </div>
            <span class="count">(11)</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/categories"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="ri-arrow-right-s-fill"></i>
              <span class="name">Technology</span>
            </div>
            <span class="count">(09)</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/categories"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="ri-arrow-right-s-fill"></i>
              <span class="name">Network Tips</span>
            </div>
            <span class="count">(14)</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/categories"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="ri-arrow-right-s-fill"></i>
              <span class="name">Network Security</span>
            </div>
            <span class="count">(15)</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/categories"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="ri-arrow-right-s-fill"></i>
              <span class="name">Business</span>
            </div>
            <span class="count">(03)</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/categories"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <i class="ri-arrow-right-s-fill"></i>
              <span class="name">Streaming</span>
            </div>
            <span class="count">(24)</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="sidebar-wedget">
      <span class="top-title">POPULAR POST</span>
      <ul class="ps-0 mb-0 list-unstyled popular-post">
        <li>
          <RouterLink to="/blog-details" class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img src="@/assets/images/blog-11.jpg" alt="blog" />
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center mb-1">
                <i class="ti ti-calendar-week"></i>
                <span class="text-body">22 Jan, 2025</span>
              </div>
              <h4>How to change yourself for the better</h4>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/blog-details" class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img src="@/assets/images/blog-12.jpg" alt="blog" />
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center mb-1">
                <i class="ti ti-calendar-week"></i>
                <span class="text-body">23 Jan, 2025</span>
              </div>
              <h4>Google web ranking changing much</h4>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/blog-details" class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img src="@/assets/images/blog-13.jpg" alt="blog" />
            </div>
            <div class="flex-grow-1 ms-3">
              <div class="d-flex align-items-center mb-1">
                <i class="ti ti-calendar-week"></i>
                <span class="text-body">24 Jan, 2025</span>
              </div>
              <h4>10 Tactics for marketing your company</h4>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="sidebar-wedget">
      <span class="top-title">POPULAR TAGS</span>
      <ul class="ps-0 mb-0 list-unstyled popular-tags d-flex flex-wrap gap-2">
        <li>
          <RouterLink to="/tags">Business</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">Design</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">IT</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">Netwok Security</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">Fastest Internet</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">Mobile</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">Tips</RouterLink>
        </li>
        <li>
          <RouterLink to="/tags">Data</RouterLink>
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
