<template>
  <div class="overflow-hidden">
    <div class="services-details-area ptb-100">
      <div class="container mw-1356">
        <div class="row">
          <div class="col-lg-4">
            <SidebarWidget />
          </div>

          <div class="col-lg-8">
            <div class="services-details-content">
              <p>
                Welcome to our Seamless Connectivity Hub, where high-speed
                internet meets exceptional service, crafting an unparalleled
                online experience for you. Our internet services are designed to
                transcend boundaries, connecting you to a world of possibilities
                with speed, reliability, and innovation at the core.
              </p>

              <div class="mb-45"></div>

              <h3>Why our internet service is the best</h3>
              <ul class="ps-0 list-unstyled services-list">
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check"></i>
                  <span
                    >Implementing advanced measures to safeguard your online
                    presence.</span
                  >
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check"></i>
                  <span
                    >Smooth internet connection without any interruption</span
                  >
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check"></i>
                  <span>Seamless connectivity than ever</span>
                </li>
              </ul>

              <p>
                At the heart of our service is a commitment to cutting-edge
                technology, ensuring that you stay at the forefront of the
                digital revolution. With lightning-fast speeds, low latency, and
                a robust network infrastructure, our internet service sets the
                stage for seamless connectivity, empowering you to work, play,
                and connect with unprecedented ease.
              </p>
              <p>
                Whether you're a tech-savvy professional, a large family
                household, or a senior citizen embracing the wonders of the
                digital age, our internet service is tailored to meet your
                expectations.
              </p>

              <div class="mb-45"></div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="services-img">
                    <img src="@/assets/images/services-1.jpg" alt="services" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="services-img">
                    <img src="@/assets/images/services-2.jpg" alt="services" />
                  </div>
                </div>
              </div>

              <p>
                Choose our Seamless Connectivity Hub for more than just an
                internet service – choose a gateway to a world where innovation,
                reliability, and customer satisfaction converge to redefine the
                way you experience the digital realm.
              </p>

              <div class="mb-45"></div>

              <ExploreSpeeds />

              <div class="mb-45"></div>

              <h3 class="mb-4">Our internet services reviews</h3>

              <OurInternetServicesReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarWidget from "./SidebarWidget.vue";
import ExploreSpeeds from "./ExploreSpeeds.vue";
import OurInternetServicesReviews from "./OurInternetServicesReviews.vue";

export default defineComponent({
  name: "ServicesDetails",
  components: {
    SidebarWidget,
    ExploreSpeeds,
    OurInternetServicesReviews,
  },
});
</script>
