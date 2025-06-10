<template>
  <div class="top-header-area bg-grey-teal">
    <div class="container mw-1685">
      <div class="ptb-11">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <ul
              class="ps-0 mb-0 list-unstyled info-link style-two d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start position-relative tops-1"
            >
              <li>
                <a href="tel:+0013213456">
                  <i class="ti ti-phone-call"></i>
                  Call: +001 321 3456
                </a>
              </li>
              <li>
                <a href="mailto:support@nestor.com">
                  <i class="ti ti-mail"></i>
                  Mail: support@nestor.com
                </a>
              </li>
              <li>
                <i class="ti ti-map-pin"></i>
                Visit: 1485 Bayshore Blvd. Ste 154, San Francisco, CA 95124
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div
              class="d-flex justify-content-center justify-content-lg-end align-items-center"
            >
              <div class="login-register">
                <RouterLink to="/login">LOGIN</RouterLink>
                <RouterLink to="/register" class="">REGISTER</RouterLink>
              </div>
              <ul
                class="ps-0 mb-0 list-unstyled d-flex flex-wrap align-items-center social-link"
              >
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainHeader",
});
</script>
