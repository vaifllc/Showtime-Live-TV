<template>
  <div class="ott-made-area pt-100 pb-75">
    <div class="container">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 class="text-white">OTT That Made For You</h2>
      </div>

      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="ott-made-card">
            <div class="image">
              <img src="@/assets/images/ott-platform/made1.png" alt="image" />
            </div>
            <div class="content">
              <h3>Upto 6 Individual Accounts</h3>
              <p>With personalized recommendations.</p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="ott-made-card">
            <div class="image">
              <img src="@/assets/images/ott-platform/made2.png" alt="image" />
            </div>
            <div class="content">
              <h3>Unlimited DVR Space For All</h3>
              <p>Everyone gets their own login.</p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="ott-made-card">
            <div class="image">
              <img src="@/assets/images/ott-platform/made3.png" alt="image" />
            </div>
            <div class="content">
              <h3>4 Simultaneous Streams</h3>
              <p>Watch on your favourite device.</p>
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
  name: "ThatMadeForYou",
});
</script>
