<template>
  <div class="contact-info-area pt-100 pb-75">
    <div class="container mw-1356">
      <div class="section-title m-auto text-center">
        <span class="top-title">CONTACT</span>
        <h2>We always love to get in touch</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="contact-info-single-item">
            <i class="ti ti-map-2 shapes"></i>
            <i class="ti ti-map-2 icon"></i>
            <h3>Location</h3>
            <p>1485 Bayshore Blvd. Ste 154, San Francisco, CA 95124</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="contact-info-single-item">
            <i class="ti ti-phone-call shapes"></i>
            <i class="ti ti-phone-call icon"></i>
            <h3>Phone</h3>
            <p>
              <a href="tel:+32123455678">+321 2345 5678,</a>
              <a href="tel:+32123455677">+321 2345 5677,</a>
              <a href="tel:+32123455679">+321 2345 5679</a>
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="contact-info-single-item">
            <i class="ti ti-mail-bolt shapes"></i>
            <i class="ti ti-mail-bolt icon"></i>
            <h3>Phone</h3>
            <p>
              <a href="mailto:hellonestor@gmail.com">hellonestor@gmail.com</a>
              <a href="mailto:supportnestorteam@gmail.com">
                supportnestorteam@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactInfo",
});
</script>
