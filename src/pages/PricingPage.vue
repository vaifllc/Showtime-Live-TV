<template>
  <NavbarTwo />

  <!-- Hero Section -->
  <div class="pricing-hero-area bg-secondary pb-100 pt-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-12 m-auto text-center">
          <div class="hero-content">
            <h1 class="text-white mb-4">Premium IPTV Subscription Plans</h1>
            <p class="text-white mb-5">Choose the perfect plan for your entertainment needs with our high-quality IPTV service. All plans include 15,000+ channels, 40,000+ VODs, and 24/7 support.</p>

            <div class="d-flex justify-content-center">
              <a @click="scrollToPlans" class="btn btn-primary me-3 cursor-pointer">
                <span class="border-style">View Plans</span>
              </a>
              <RouterLink to="/contact-us" class="btn btn-outline-light">
                <span class="border-style">Contact Support</span>
              </RouterLink>
            </div>
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

  <!-- Features Section -->
  <div class="iptv-features-area bg-gondola pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-5">
        <span class="top-title">WHY CHOOSE US</span>
        <h2 class="text-white">The Ultimate IPTV Experience</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div class="single-feature p-4 text-center mb-4">
            <i class="ti ti-device-tv text-primary mb-3" style="font-size: 48px;"></i>
            <h3 class="text-white">15,000+ Live Channels</h3>
            <p>Access thousands of channels from around the globe in HD and 4K quality</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div class="single-feature p-4 text-center mb-4">
            <i class="ti ti-movie text-primary mb-3" style="font-size: 48px;"></i>
            <h3 class="text-white">40,000+ VOD Content</h3>
            <p>Enjoy our vast library of movies and TV shows on-demand</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div class="single-feature p-4 text-center mb-4">
            <i class="ti ti-devices text-primary mb-3" style="font-size: 48px;"></i>
            <h3 class="text-white">Multi-Device Support</h3>
            <p>Stream on Smart TVs, phones, tablets, and more with our flexible plans</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pricing Plans Section -->
  <div id="pricing-plans" ref="pricingPlansSection" class="pricing-area ptb-100 bg-gondola">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">PRICING PLANS</span>
        <h2 class="text-white">Choose Your Perfect IPTV Plan</h2>
        <p class="text-silver mt-3">All plans include high-quality streaming, without freezing, and 24/7 customer support</p>
      </div>

      <div class="row justify-content-center">
        <!-- First row of pricing plans -->
        <div
          v-for="(plan, index) in pricingPlansRow1"
          :key="index"
          class="col-xl-3 col-md-6"
          :class="{ 'mt-4 mt-xl-0': index !== 0 }"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="pricing-single-item style-two">
            <span class="ignite d-block" v-if="plan.isPopular">
              POPULAR
            </span>
            <div
              class="pricing-content bg-mg"
              :style="{ backgroundImage: 'url(' + plan.bgImage + ')' }"
            >
              <div class="plan-name">
                <h3 class="text-white">{{ plan.title }}</h3>
              </div>
              <div class="amount">
                <h2>${{ plan.price }}</h2>
              </div>

              <ul class="ps-0 list-unstyled pricing-list">
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.devices }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.channels }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.vods }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.quality }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.freezing }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.uptime }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.support }}</span>
                </li>
              </ul>

              <a href="#" class="btn active">
                <span class="border-style">Get Started</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Second row of pricing plans -->
        <div
          v-for="(plan, index) in pricingPlansRow2"
          :key="'row2-' + index"
          class="col-xl-3 col-md-6 mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="pricing-single-item style-two">
            <span class="ignite d-block" v-if="plan.isPopular">
              POPULAR
            </span>
            <div
              class="pricing-content bg-mg"
              :style="{ backgroundImage: 'url(' + plan.bgImage + ')' }"
            >
              <div class="plan-name">
                <h3 class="text-white">{{ plan.title }}</h3>
              </div>
              <div class="amount">
                <h2>${{ plan.price }}</h2>
              </div>

              <ul class="ps-0 list-unstyled pricing-list">
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.devices }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.channels }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.vods }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.quality }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.freezing }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.uptime }}</span>
                </li>
                <li class="d-flex align-items-center">
                  <i class="ti ti-circle-check text-success"></i>
                  <span>{{ plan.support }}</span>
                </li>
              </ul>

              <a href="#" class="btn active">
                <span class="border-style">Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="faq-area ptb-100 bg-gondola">
    <div class="container">
      <div class="section-title text-center mb-5">
        <span class="top-title">FAQ</span>
        <h2 class="text-white">Frequently Asked Questions</h2>
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

  <!-- Contact Section -->
  <div id="contact" ref="contactSection" class="contact-area ptb-100 bg-gondola">
    <div class="container">
      <div class="section-title text-center mb-5">
        <span class="top-title">SUPPORT</span>
        <h2 class="text-white">Need Help? Contact Us</h2>
        <p class="text-silver mt-3">Our customer support team is available 24/7 to assist you with any questions</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="contact-methods mb-4">
            <div class="d-flex align-items-center mb-3">
              <i class="ti ti-mail text-primary me-3" style="font-size: 24px;"></i>
              <a href="mailto:support@showtimelive.com" class="text-white">support@showtimelive.com</a>
            </div>
            <div class="d-flex align-items-center">
              <i class="ti ti-brand-telegram text-primary me-3" style="font-size: 24px;"></i>
              <a href="#" class="text-white">Join our Telegram support channel</a>
            </div>
          </div>
          <div class="text-center mt-5">
            <RouterLink to="/contact-us" class="btn btn-primary">
              <span class="border-style">Visit Our Contact Page</span>
            </RouterLink>
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
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NavbarTwo from "@/components/Layouts/NavbarTwo.vue";
import SubscribeContent from "@/components/Common/SubscribeContent.vue";
import MainFooter from "@/components/Layouts/MainFooter.vue";
import CopyRight from "@/components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    NavbarTwo,
    SubscribeContent,
    MainFooter,
    CopyRight,
  },
  setup() {
    const pricingPlansSection = ref(null);
    const contactSection = ref(null);
    const router = useRouter();

    // Common features for all plans
    const commonFeatures = {
      channels: "Up to 15,000+ Channels",
      vods: "Up to 40,000+ Vods",
      quality: "4K Picture Quality",
      freezing: "Without Freezing",
      uptime: "99.9% Server Uptime",
      support: "24/7 Support"
    };

    // First row pricing plans
    const pricingPlansRow1 = ref([
      {
        title: "30 DAY TEST",
        price: "25",
        devices: "1 DEVICE",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-1.6065d295.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS BASIC",
        price: "45",
        devices: "1 DEVICE",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-2.69b9206b.jpg"),
        ...commonFeatures
      },
      {
        title: "6 MONTHS STANDARD",
        price: "90",
        devices: "1 DEVICE",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-3.a2ccc937.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS FAMILY",
        price: "180",
        devices: "5 DEVICES",
        isPopular: true,
        bgImage: require("@/assets/images/pricing-bg-1.6065d295.jpg"),
        ...commonFeatures
      }
    ]);

    // Second row pricing plans
    const pricingPlansRow2 = ref([
      {
        title: "3 MONTHS DUO",
        price: "90",
        devices: "2 DEVICES",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-2.69b9206b.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS TRIO",
        price: "120",
        devices: "3 DEVICES",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-3.a2ccc937.jpg"),
        ...commonFeatures
      },
      {
        title: "3 MONTHS QUAD",
        price: "150",
        devices: "4 DEVICES",
        isPopular: false,
        bgImage: require("@/assets/images/pricing-bg-1.6065d295.jpg"),
        ...commonFeatures
      },
      {
        title: "1 YEAR PREMIUM",
        price: "299",
        devices: "5 DEVICES",
        isPopular: true,
        bgImage: require("@/assets/images/pricing-bg-2.69b9206b.jpg"),
        ...commonFeatures,
        support: "Priority 24/7 Support"
      }
    ]);

    // FAQ Items with isOpen property
    const faqItems = ref([
      {
        question: "What devices are compatible with your IPTV service?",
        answer: "Our IPTV service works with a wide range of devices including Smart TVs, Android TV boxes, Amazon Fire Stick, tablets, smartphones, and computers. You can stream on any device that supports IPTV applications.",
        isOpen: false
      },
      {
        question: "How many devices can I use with my subscription?",
        answer: "The number of devices depends on your subscription plan. We offer plans for 1, 2, 3, 4, or 5 devices. Each plan allows you to watch on the specified number of devices simultaneously.",
        isOpen: false
      },
      {
        question: "Do you offer a trial period?",
        answer: "Yes, we offer a 30-day test subscription for $25 so you can try our service before committing to a longer plan.",
        isOpen: false
      },
      {
        question: "How do I set up the service after purchase?",
        answer: "After your purchase, you'll receive login credentials and detailed setup instructions via email. Our support team is available 24/7 to assist with the installation process.",
        isOpen: false
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, PayPal, and cryptocurrency payments for all our subscription plans.",
        isOpen: false
      }
    ]);

    // Function to toggle FAQ accordion
    const toggleFaq = (index: number) => {
      faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
    };

    // Function to scroll to pricing plans section
    const scrollToPlans = () => {
      if (pricingPlansSection.value) {
        (pricingPlansSection.value as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return {
      pricingPlansRow1,
      pricingPlansRow2,
      faqItems,
      toggleFaq,
      pricingPlansSection,
      contactSection,
      scrollToPlans
    };
  },
});
</script>

<style scoped>
.pricing-hero-area {
  position: relative;
  padding-top: 120px;
  overflow: hidden;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
}

.single-feature {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  height: 100%;
}

.single-feature:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.1);
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

.contact-methods a {
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-methods a:hover {
  color: var(--primary) !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
