<template>
  <div class="si-check-availability-area pb-100">
    <div class="container">
      <div class="row justify-content-center align-items-center g-5">
        <div
          class="col-lg-7 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="si-check-availability-content">
            <span class="top-title">CHECK AVAILABILITY</span>
            <h2>
              CHECK THE AVAILABILITY OF OUR SPECIAL ANTENA IN YOUR LOCALITY
            </h2>
            <p>
              With Internet Speed upto 10 Gig, Connect, Work, & Play Like Never
              Before.
            </p>
            <form class="check-form">
              <select class="form-select">
                <option selected>Search area</option>
                <option value="1">Broadband internet</option>
                <option value="2">Mobile connection</option>
                <option value="3">Home security</option>
              </select>
              <div class="check-btn">
                <button type="submit" class="btn">
                  <span class="border-style">Check Availability</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="col-lg-5 col-md-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="si-check-availability-image">
            <img
              src="@/assets/images/satellite-internet/check-availability.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckAvailability",
});
</script>
