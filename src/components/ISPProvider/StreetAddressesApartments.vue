<template>
  <div class="availability-area">
    <div class="container mw-1780">
      <div class="availability-wrap">
        <div class="row align-items-center">
          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="availability-content">
              <h3>Find Deals On Fast, Reliable Internet And Mobile Near You</h3>
              <div class="d-sm-flex align-items-center">
                <a href="tel:+8552451311">Call: +855 245 1311</a>
                <span class="d-block ms-0 ms-sm-2 mt-2 mt-sm-0">
                  for any kind of enquiry
                </span>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="availability-form">
              <p>Street Addresses & Apartments</p>
              <form class="position-relative z-1">
                <input
                  type="text"
                  class="form-control"
                  placeholder="123 Main St, Apt J, Pleasantville, MA 01040"
                />
                <button
                  type="submit"
                  class="btn active position-absolute top-50 end-0 translate-middle-y"
                >
                  <span class="d-none d-sm-inline-block border-style">
                    Check Availability
                  </span>
                  <i class="ti ti-send d-sm-none"></i>
                </button>
              </form>
              <p class="text-body">
                Already a customer?
                <RouterLink to="/register">Sign in here.</RouterLink>
              </p>
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
  name: "StreetAddressesApartments",
});
</script>
