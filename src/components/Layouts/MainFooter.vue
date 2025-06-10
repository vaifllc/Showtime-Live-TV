<template>
  <div class="footer-area pt-100 pb-75">
    <div class="container mw-1356">
      <div class="row">
        <div
          class="col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div class="footer-single-widget mw-250">
            <RouterLink to="/" class="d-inline-block footer-logo">
              <h1 style="color: white; font-size: 24px; font-weight: bold; margin: 0;">Showtime Live TV</h1>
            </RouterLink>
            <p>Your Ultimate Destination for Premium IPTV Entertainment</p>
            <h4>Social Media</h4>
            <ul class="ps-0 mb-0 list-unstyled d-flex social-links">
              <li v-for="social in footerData.socialLinks" :key="social.name">
                <a :href="social.url" target="_blank">
                  <i :class="social.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="row">
            <div
              v-for="(section, index) in footerData.sections"
              :key="index"
              class="col-xl-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div class="footer-single-widget">
                <h3>{{ section.title }}</h3>
                <ul class="ps-0 mb-0 list-unstyled import-links">
                  <li v-for="link in section.links" :key="link.text">
                    <RouterLink :to="link.url">{{ link.text }}</RouterLink>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="col-xl-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div class="footer-single-widget">
                <h3>Get In Touch</h3>
                <ul class="ps-0 mb-0 list-unstyled contact-links">
                  <li
                    v-for="contact in footerData.contact"
                    :key="contact.phone"
                  >
                    <a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
                    <p class="mb-0">{{ contact.note }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "MainFooter",
  setup() {
    const footerData = reactive({
      logo: require("@/assets/images/white-logo.svg"),
      description: "Helping our communities connect, work, & thrive since 1952",
      socialLinks: [
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
          icon: "ri-facebook-fill",
        },
        {
          name: "Twitter",
          url: "https://www.twitter.com/",
          icon: "ri-twitter-x-fill",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
          icon: "ri-instagram-fill",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
          icon: "ri-linkedin-fill",
        },
      ],
      sections: [
        {
          title: "Services",
          links: [
            /* Temporarily disabled links
            { text: "Internet", url: "/services" },
            { text: "TV", url: "/services" },
            { text: "Phone", url: "/services" },
            { text: "Managed Wireless", url: "/services" },
            { text: "PAC's", url: "/services" },
            */
          ],
        },
        {
          title: "Company",
          links: [
            /* Temporarily disabled links
            { text: "About", url: "/about-us" },
            { text: "Pricing", url: "/pricing-plan" },
            { text: "Contact", url: "/contact-us" },
            { text: "Policies", url: "/privacy-policy" },
            { text: "Shop", url: "/products" },
            */
          ],
        },
        {
          title: "Information",
          links: [
            /* Temporarily disabled links
            { text: "Blog", url: "/blog" },
            { text: "Directory", url: "/about-us" },
            { text: "Resources", url: "/about-us" },
            { text: "Location In Map", url: "/contact-us" },
            { text: "Pay My Bill", url: "/pay-bill" },
            */
          ],
        },
      ],
      contact: [
        /* Temporarily disabled contact info
        {
          phone: "+1 (800) 216 20 20",
          note: "(for customer service and support)",
        },
        { phone: "+1 (800) 216 20 21", note: "(for new customers)" },
        */
      ],
    });

    return { footerData };
  },
});
</script>
