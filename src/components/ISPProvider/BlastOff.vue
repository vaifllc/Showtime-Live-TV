<template>
  <div class="blast-off-area pb-100">
    <div class="container mw-1356">
      <div
        class="blast-off-bg bg-img"
        :style="{ backgroundImage: `url(${bgImage})` }"
      >
        <div class="row align-items-center">
          <div
            class="col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="blast-off-content">
              <h2>Blast Off</h2>
              <p>
                With Internet Speed upto 10 Gig, Connect, Work, & Play Like
                Never Before.
              </p>
              <RouterLink to="/products" class="btn bg-golden text-black">
                <span class="border-style">Shop Now</span>
              </RouterLink>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="blast-off-img">
              <img src="@/assets/images/blast-off.png" alt="" />
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
  name: "BlastOff",
  data() {
    return {
      bgImage: require("@/assets/images/blast-off-bg.jpg"),
    };
  },
});
</script>
