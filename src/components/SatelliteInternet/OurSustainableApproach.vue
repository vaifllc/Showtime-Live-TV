<template>
  <div class="si-about-area ptb-100">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div
          class="col-lg-5 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="si-about-content">
            <span class="top-title">OUR SUSTAINABLE APPROACH</span>
            <h2>WE BELIEVE IN SPACE SUSTAINABILITY AND WHICH WILL GIVE YOU</h2>
            <p>
              WFH life gets easier from the company that has America's fastest
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
            <div class="starting">
              <span class="startings">STARTING FROM</span>
              <h1>$99.99<sub>/ Mo</sub></h1>
            </div>
            <RouterLink to="/pricing-plan" class="btn">
              <span class="border-style">Shop Internet Plans</span>
            </RouterLink>
          </div>
        </div>

        <div
          class="col-lg-7 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="si-about-images">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-sm-6 col-6">
                <div class="image1">
                  <img
                    src="@/assets/images/satellite-internet/about1.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-6">
                <div class="image2">
                  <img
                    src="@/assets/images/satellite-internet/about2.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="si-about-shape">
      <img
        src="@/assets/images/satellite-internet/about-shape.png"
        alt="image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurSustainableApproach",
});
</script>
