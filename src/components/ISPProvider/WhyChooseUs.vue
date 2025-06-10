<template>
  <div class="why-choose-area bg-gray3 pt-100">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">WHY CHOOSE NESTOR</span>
        <h2>Because Nestor Is Different Than Others</h2>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-12 mb-4 mb-lg-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div
            class="why-choose-single-item bg-img h-100"
            :style="{ backgroundImage: `url(${bgImage1})` }"
          >
            <div class="why-choose-content">
              <h3>
                <span>Extraordinary</span>
                <span>Speed</span>
              </h3>
              <p>Experience America’s fastest download speeds.</p>
            </div>
          </div>
        </div>

        <div
          class="col-lg-6 col-md-12 mb-4 mb-lg-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="row">
            <div class="col-lg-8 col-md-6 mb-4 mb-md-0">
              <div class="bg-secondary why-choose-single-item">
                <div class="row align-items-center">
                  <div class="col-lg-6">
                    <div class="why-choose-content p-0">
                      <h3>
                        <span>Exceptional</span>
                        <span>Reliability</span>
                      </h3>
                      <p>
                        Our fiber-powered network delivers a stable Internet
                        connection.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="why-choose-img-2">
                      <img
                        src="@/assets/images/why-choose-2.jpg"
                        alt="why-choose"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div
                class="bg-img why-choose-single-item h-100 overly"
                :style="{ backgroundImage: `url(${bgImage2})` }"
              >
                <div class="why-choose-content">
                  <h3>
                    <span>5G</span>
                    <span>Network</span>
                  </h3>
                  <p>Get 5G access on Nestor’s 5G mobile plans.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="why-choose-single-item bg-color">
                <div class="row align-items-center">
                  <div class="col-lg-5 col-sm-6">
                    <div class="why-choose-6">
                      <img
                        src="@/assets/images/why-choose-6.jpg"
                        alt="why-choose"
                      />
                    </div>
                  </div>
                  <div class="col-lg-7 col-sm-6">
                    <div class="why-choose-content">
                      <h3>
                        <span>Fibre-Powered</span>
                        <span>Internet</span>
                      </h3>
                      <p>
                        Experience our most reliable fibre-powered internet,
                        backed by our Ignite WiFi Satisfaction Guarantee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-2 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div
            class="why-choose-single-item bg-img h-100"
            :style="{ backgroundImage: `url(${bgImage3})` }"
          >
            <div class="why-choose-content">
              <h3>
                <span>Straight-</span>
                <span>forward</span>
                <span>Price</span>
              </h3>
              <p>No annual fee or equipment charges.</p>
            </div>
            <div class="why-choose-4">
              <img src="@/assets/images/why-choose-4.jpg" alt="why-choose" />
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
  name: "WhyChooseUs",
  data() {
    return {
      bgImage1: require("@/assets/images/why-choose-1.jpg"),
      bgImage2: require("@/assets/images/why-choose-3.jpg"),
      bgImage3: require("@/assets/images/why-choose-5.jpg"),
    };
  },
});
</script>
