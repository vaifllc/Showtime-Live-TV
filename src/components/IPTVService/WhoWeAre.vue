<template>
  <div
    class="who-we-area pt-100 overflow-hidden bg-gondola2 position-relative z-1"
  >
    <!-- Add video background -->
    <div class="video-background">
      <video autoplay muted loop>
        <source src="@/assets/videos/showtime.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="video-overlay"></div>
    </div>

    <div class="container mw-1356">
      <div class="row" data-cues="zoomOut">
        <div class="col-lg-12">
          <div class="who-we-area-content">
            <span class="top-title">WHO WE ARE</span>
            <h2 class="text-white">
              Your Ultimate Destination for Premium IPTV Entertainment
            </h2>
            <p>
              Experience the future of television with our cutting-edge IPTV service. We deliver crystal-clear HD and 4K streaming, instant channel switching, and an extensive library of live TV channels, movies, and sports events. Our advanced technology ensures smooth playback with zero buffering, while our intuitive interface makes navigation effortless.
            </p>
            <div class="row align-items-center">
              <div class="col-lg-9">
                <ul class="ps-0 list-unstyled we-are-list">
                  <li>
                    <i class="ti ti-circle-check"></i>
                    <span>Watch on multiple devices simultaneously</span>
                  </li>
                  <li>
                    <i class="ti ti-circle-check"></i>
                    <span>Access 10,000+ channels worldwide</span>
                  </li>
                  <li>
                    <i class="ti ti-circle-check"></i>
                    <span>24/7 customer support & instant activation</span>
                  </li>
                </ul>
              </div>
              <!-- <div class="col-lg-3">
                <div class="google">
                  <img src="@/assets/images/google.png" alt="google" />
                  <p>Customer Rating <span>4.9</span></p>
                </div>
              </div> -->
            </div>

            <!-- Temporarily disabled button
            <RouterLink to="/contact-us" class="btn">
              <span class="border-style">Start Streaming Now</span>
            </RouterLink>
            -->
          </div>
        </div>

        <!-- Commented out the entire right column with images
        <div class="col-lg-6">
          <div class="who-we-img-wrap">
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
                  <img src="@/assets/images/who-we-1.e7eb1dc3.jpg" alt="who-we" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="who-we-2 who-we-img">
                  <img src="@/assets/images/who-we-2.b9983557.jpg" alt="who-we" />
                </div>
              </div>
            </div>
          </div>
        </div>
        -->
      </div>
    </div>

    <!-- Commented out border and shape images
    <img src="@/assets/images/border-3.png" class="border-3" alt="border" />
    <img
      src="@/assets/images/shape-10.png"
      class="shape shape-10"
      alt="shape"
    />
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhoWeAre",
});
</script>

<style scoped>
/* Add video background styles */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 0;
}

/* Ensure text is readable over video */
.who-we-area-content p,
.who-we-area-content span,
.who-we-area-content h2,
.we-are-list li span {
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Center the content better now that we're using full width */
.who-we-area-content {
  max-width: 800px;
  margin: 0 auto;
}
</style>
