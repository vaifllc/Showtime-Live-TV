<template>
  <NavbarTwo />

  <!-- Hero Section -->
  <div class="contact-hero-area bg-secondary pb-100 pt-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-12 m-auto text-center">
          <div class="hero-content">
            <h1 class="text-white mb-4">Get In Touch With Us</h1>
            <p class="text-white mb-5">Our customer support team is available 24/7 to assist you with any questions about our IPTV services</p>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/images/shape-20.png"
      class="shape-21 shape"
      alt="shape"
    />
    <img
      src="@/assets/images/shape-21.png"
      class="shape-22 shape"
      alt="shape"
    />
  </div>

  <!-- Contact Info Section -->
  <div class="contact-info-area bg-gondola pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-5">
        <span class="top-title">CONTACT OPTIONS</span>
        <h2 class="text-white">Multiple Ways To Reach Us</h2>
        <p class="text-silver mt-3">Choose the option that works best for you</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div class="single-contact-info p-4 text-center mb-4">
            <i class="ti ti-mail text-primary mb-3" style="font-size: 48px;"></i>
            <h3 class="text-white">Email Support</h3>
            <p>Our support team typically responds within 1 hour</p>
            <a href="mailto:support@showtimelive.com" class="contact-link">support@showtimelive.com</a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div class="single-contact-info p-4 text-center mb-4">
            <i class="ti ti-brand-telegram text-primary mb-3" style="font-size: 48px;"></i>
            <h3 class="text-white">Telegram Support</h3>
            <p>Join our Telegram channel for instant support</p>
            <a href="#" class="contact-link">@ShowtimeLiveSupport</a>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div class="single-contact-info p-4 text-center mb-4">
            <i class="ti ti-headset text-primary mb-3" style="font-size: 48px;"></i>
            <h3 class="text-white">24/7 Live Support</h3>
            <p>Our team is always available to help you</p>
            <a href="#contact-form" class="contact-link">Use the contact form below</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Form Section -->
  <div id="contact-form" class="contact-form-area ptb-100 bg-gondola">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div class="contact-image">
            <img src="@/assets/images/page-banner-7.115bdec6.jpg" alt="Contact Us" class="img-fluid rounded-3">
          </div>
        </div>

        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div class="contact-form-wrapper p-4 p-lg-5 ms-lg-4 rounded-3">
            <div class="section-title mb-4">
              <span class="top-title">SEND MESSAGE</span>
              <h2 class="text-white">Let's Hear From You</h2>
              <p class="text-silver mt-2">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form class="contact-form">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Name" required>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Your Email" required>
                  </div>
                </div>

                <div class="col-md-12 mb-4">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject">
                  </div>
                </div>

                <div class="col-md-12 mb-4">
                  <div class="form-group">
                    <textarea class="form-control" rows="6" placeholder="Your Message" required></textarea>
                  </div>
                </div>

                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">
                    <span class="border-style">Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="faq-area ptb-100 bg-gondola">
    <div class="container">
      <div class="section-title text-center mb-5">
        <span class="top-title">COMMON QUESTIONS</span>
        <h2 class="text-white">Frequently Asked Support Questions</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="faq-wrapper">
            <div class="faq-item mb-4" v-for="(item, index) in faqItems" :key="index">
              <div
                class="faq-question d-flex justify-content-between align-items-center p-3"
                :class="{ 'active': item.isOpen }"
                @click="toggleFaq(index)">
                <h4 class="mb-0 text-white">{{ item.question }}</h4>
                <i class="ti" :class="item.isOpen ? 'ti-chevron-up' : 'ti-chevron-down'"></i>
              </div>
              <div class="faq-answer p-3" v-show="item.isOpen">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <SubscribeContent />
  <MainFooter class="bg-black" />
  <CopyRight />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ContactUsPage",
  components: {
    NavbarTwo,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    // FAQ Items with isOpen property
    const faqItems = ref([
      {
        question: "How quickly can I expect a response to my inquiry?",
        answer: "We strive to respond to all email inquiries within 1 hour. For urgent matters, our Telegram support channel offers the fastest response times, typically within minutes.",
        isOpen: false
      },
      {
        question: "What information should I include in my support request?",
        answer: "To help us address your issue quickly, please include your subscription details, the device you're using, a clear description of the problem, and any error messages you're seeing. Screenshots or videos of the issue are also very helpful.",
        isOpen: false
      },
      {
        question: "Do you offer technical setup assistance?",
        answer: "Yes, our support team can guide you through the setup process for any device. We provide step-by-step instructions and can even arrange a remote assistance session for complex setups.",
        isOpen: false
      },
      {
        question: "How do I report a channel issue or request?",
        answer: "You can report channel issues through our contact form or Telegram support. Please specify the channel name, the issue you're experiencing, and when you first noticed it. For channel requests, simply let us know which channels you'd like to see added to our service.",
        isOpen: false
      }
    ]);

    // Function to toggle FAQ accordion
    const toggleFaq = (index: number) => {
      faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
    };

    return {
      faqItems,
      toggleFaq
    };
  },
});
</script>

<style scoped>
.contact-hero-area {
  position: relative;
  padding-top: 120px;
  overflow: hidden;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
}

.single-contact-info {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  height: 100%;
}

.single-contact-info:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.1);
}

.contact-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 10px;
}

.contact-link:hover {
  transform: translateX(5px);
}

.contact-form-wrapper {
  background-color: rgba(255, 255, 255, 0.05);
}

.form-control {
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 12px 15px;
  height: auto;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-control:focus {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: none;
  border-color: var(--primary);
}

textarea.form-control {
  min-height: 150px;
}

.faq-question {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question.active {
  background-color: var(--primary);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.faq-answer {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.faq-question h4 {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
