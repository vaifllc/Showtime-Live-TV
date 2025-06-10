<template>
  <div
    class="pricing-area si-without-border-radius pb-75 position-relative z-1"
  >
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">PRICING PLANS</span>
        <h2>OUR AFFORDABLE PRICING PLANS</h2>
      </div>

      <ul
        class="nav nav-tabs justify-content-center pricing-tabs"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <li class="nav-item">
          <button
            class="nav-link"
            :class="['tab', { active: activeTab === 'internet' }]"
            @click="setActiveTab('internet')"
          >
            Internet
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            :class="['tab', { active: activeTab === 'tv' }]"
            @click="setActiveTab('tv')"
          >
            TV
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            :class="['tab', { active: activeTab === 'homeSecurity' }]"
            @click="setActiveTab('homeSecurity')"
          >
            Home Security
          </button>
        </li>
      </ul>

      <div class="tab-content">
        <div v-show="activeTab === 'internet'">
          <div class="row justify-content-center">
            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="pricing-single-item">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-1.png" alt="pricing" />
                  <h3>Internet 150</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>150</span> Mbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>30</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 59.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="pricing-single-item active">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-2.png" alt="pricing" />
                  <h3>Internet 500</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>500</span> Mbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>30</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 99.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div class="pricing-single-item">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-3.png" alt="pricing" />
                  <h3>Internet 1.5 Gig</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>1.5</span> Gbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>50</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 119.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'tv'">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-md-6">
              <div class="pricing-single-item">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-1.png" alt="pricing" />
                  <h3>Internet 150</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>150</span> Mbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>30</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 59.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="pricing-single-item active">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-2.png" alt="pricing" />
                  <h3>Internet 500</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>500</span> Mbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>30</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 99.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="pricing-single-item">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-3.png" alt="pricing" />
                  <h3>Internet 1.5 Gig</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>1.5</span> Gbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>50</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 119.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'homeSecurity'">
          <div class="row justify-content-center">
            <div class="col-xl-4 col-md-6">
              <div class="pricing-single-item">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-1.png" alt="pricing" />
                  <h3>Internet 150</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>150</span> Mbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>30</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 59.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="pricing-single-item active">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-2.png" alt="pricing" />
                  <h3>Internet 500</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>500</span> Mbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>30</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 99.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="pricing-single-item">
                <span class="ignite d-block">
                  Get Ignite Streaming For $5/Month
                </span>
                <div class="pricing-content">
                  <img src="@/assets/images/pricing-3.png" alt="pricing" />
                  <h3>Internet 1.5 Gig</h3>
                  <p>
                    on a 24-month term. $79.99/mo thereafter, subject to
                    increase.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center speed-mbps"
                  >
                    <div class="download">
                      <span class="speed">Download speed up to</span>
                      <span class="mbps"><span>1.5</span> Gbps</span>
                    </div>
                    <div class="download">
                      <span class="speed">Upload speed up to</span>
                      <span class="mbps"><span>50</span> Mbps</span>
                    </div>
                  </div>
                  <span class="unlimited">UNLIMITED USAGE</span>
                  <h2>$ 119.99<sub>/ Mo</sub></h2>
                  <RouterLink to="/contact-us" class="btn active">
                    <span class="border-style">Shop Internet Now</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/images/shape-19.png"
      class="shape-19 shape"
      alt="shape"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PricingPlans",
  setup() {
    const activeTab = ref("internet");

    const setActiveTab = (tab: string) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
});
</script>
