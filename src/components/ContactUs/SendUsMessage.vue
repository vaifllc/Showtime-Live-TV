<template>
  <div class="contact-form-area pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contact-form-map">
            <iframe
              style="
                width: 100%;
                height: 378px;
                border-radius: 10px;
                display: block;
              "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.7252813160476!2d-122.40609221071485!3d37.726125742770115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f1df686746d%3A0x8e6f9273562379e3!2s1485%20Bayshore%20Blvd%20%23154%2C%20San%20Francisco%2C%20CA%2094124%2C%20USA!5e0!3m2!1sen!2sbd!4v1707982401773!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="contact-form-content">
            <span class="top-title">SEND US A MESSAGE</span>
            <h2>We will be in touch shortly</h2>
            <p>
              We’d love to hear from you! If you have any questions, comments,
              or feedback about our services, please don’t hesitate to get in
              touch with us using one of the methods below.
            </p>
          </div>

          <div class="contact-form">
            <form>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput1"
                      placeholder="Name"
                    />
                    <label for="floatingInput1">Name</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput2"
                      placeholder="Email"
                    />
                    <label for="floatingInput2">Email</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput3"
                      placeholder="Website"
                    />
                    <label for="floatingInput3">Website</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput4"
                      placeholder="Company"
                    />
                    <label for="floatingInput4">Company</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-floating mb-4">
                    <textarea
                      class="form-control"
                      id="floatingInput5"
                      placeholder="Your message here"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <label for="floatingInput5">Your message here</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn">
                    <span class="border-style">Send Message Now</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SendUsMessage",
});
</script>
