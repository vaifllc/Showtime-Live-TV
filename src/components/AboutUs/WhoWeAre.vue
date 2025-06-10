<template>
  <div class="who-we-area pt-100 overflow-hidden pb-100">
    <div class="container mw-1356">
      <div class="row">
        <div class="col-xl-6">
          <div class="who-we-area-content">
            <span class="top-title">WHO WE ARE</span>
            <h2>We are proud to offer the best IPTV subscriptions</h2>
            <p class="text-body">
              Our Best IPTV subscriptions offer high-quality streaming, with no
              buffering or lagging. You can easily navigate through channels
              using our user-friendly interface and enjoy a seamless experience.
            </p>
            <ul class="ps-0 list-unstyled we-are-list">
              <li>
                <i class="ti ti-circle-check"></i>
                <span class="text-secondary">
                  Connect several devices at once
                </span>
              </li>
              <li>
                <i class="ti ti-circle-check"></i>
                <span class="text-secondary">
                  Gig download speeds available everywhere
                </span>
              </li>
              <li>
                <i class="ti ti-circle-check"></i>
                <span class="text-secondary">Wall-to-wall wifi connection</span>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <a href="#subscribe" class="btn">
                <span class="border-style">Subscribe Now</span>
              </a>

              <div class="google style-two">
                <img src="@/assets/images/google.png" alt="google" />
                <p class="mb-0">Ratings <span>4.7</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="who-we-img-wrap-two">
            <div class="row align-items-end">
              <div class="col-lg-6 col-sm-6">
                <div class="who-we-1 who-we-img">
                  <div class="row">
                    <div class="col-lg-6 col-sm-6">
                      <div class="review mb-minus-53">
                        <div class="review-in">
                          <span>FIVE STAR REVIEWS</span>
                          <h1>500K</h1>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      <div class="review bg-golden">
                        <div class="review-in">
                          <span>ACTIVE SUBSCRIPTION</span>
                          <h1>5.3K</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img src="@/assets/images/who-we-1.jpg" alt="who-we" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="who-we-2 who-we-img">
                  <img src="@/assets/images/who-we-2.jpg" alt="who-we" />
                </div>
              </div>
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
  name: "WhoWeAre",
});
</script>
