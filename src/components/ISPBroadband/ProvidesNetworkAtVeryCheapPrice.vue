<template>
  <div class="featuress-area ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="features-content-three position-relative z-1">
            <span class="top-title">FEATURES</span>
            <h2>Nestor provides the broadband network at very cheap price</h2>
            <p>
              WFH life gets easier from the company that has America’s fastest
              download speeds on a fiber-powered network.
            </p>
            <ul class="ps-0 list-unstyled features-list">
              <li>
                <i class="ti ti-circle-check"></i>
                <span>Connect several devices at once</span>
              </li>
              <li>
                <i class="ti ti-circle-check"></i>
                <span>Gig download speeds available everywhere</span>
              </li>
              <li>
                <i class="ti ti-circle-check"></i>
                <span>Wall-to-wall wifi connection</span>
              </li>
            </ul>
            <div class="d-flex starting-wrap">
              <div class="starting">
                <span class="startings">STARTING FROM</span>
                <h1>$ 99.99<sub>/ Mo</sub></h1>
              </div>
              <div class="google-rate">
                <img src="@/assets/images/google.png" alt="google" />
                <p>Ratings <span>4.7</span></p>
              </div>
            </div>
            <RouterLink to="/pricing-plan" class="btn">
              <span class="border-style">Shop Internet Plans</span>
            </RouterLink>
            <img
              src="@/assets/images/shape-16.png"
              class="shape shape-17"
              alt="shape"
            />
          </div>
        </div>

        <div
          class="col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="features-img">
            <img src="@/assets/images/features-img-1.png" alt="features-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProvidesNetworkAtVeryCheapPrice",
});
</script>
