<template>
  <div class="subscribe-area bg-50 position-relative">
    <div class="container mw-1356">
      <div class="bg-golden ptb-60 position-relative z-1 overflow-hidden">
        <div class="row align-items-center">
          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div class="subscribe-img">
              <img :src="subscribeImage" alt="subscribe" />
            </div>
          </div>

          <div
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="subscribe-content">
              <h3>{{ heading }}</h3>
              <form @submit.prevent="handleSubmit">
                <label class="label">Email Address</label>
                <div class="d-sm-flex">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    :placeholder="placeholder"
                    required
                  />
                  <button type="submit" class="btn active ms-1 mt-2 mt-sm-0">
                    <span class="border-style">{{ buttonText }}</span>
                  </button>
                </div>
              </form>
              <!-- <p>
                By submitting, you agree to our
                <RouterLink to="/terms-conditions" class="text-decoration-none">
                  Terms & Conditions.
                </RouterLink>
              </p> -->
            </div>
          </div>
        </div>

        <img :src="shape3" class="shape shape-3" alt="shape" />
        <img :src="shape4" class="shape shape-4" alt="shape" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SubscribeContent",
  props: {
    heading: {
      type: String,
      default:
        "Sign up to hear about incredible offers you won’t want to miss – plus our latest products, services and more.",
    },
    placeholder: {
      type: String,
      default: "Enter your email address",
    },
    buttonText: {
      type: String,
      default: "Submit",
    },
    subscribeImage: {
      type: String,
      default: require("@/assets/images/subscribe.3f50f41b.png"),
    },
    shape3: {
      type: String,
      default: require("@/assets/images/shape-3.png"),
    },
    shape4: {
      type: String,
      default: require("@/assets/images/shape-4.png"),
    },
  },
  setup() {
    const email = ref("");

    const handleSubmit = () => {
      if (email.value) {
        console.log("Email submitted:", email.value);
        email.value = "";
      }
    };

    return {
      email,
      handleSubmit,
    };
  },
});
</script>
