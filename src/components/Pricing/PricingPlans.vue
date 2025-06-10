<template>
  <div class="pricing-area ptb-100">
    <div class="container mw-1356">
      <div
        class="section-title mw-860 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">PRICING PLANS</span>
        <h2>Our Affordable Pricing Plans</h2>
      </div>

          <div class="row justify-content-center">
            <div
          v-for="(plan, index) in plans"
          :key="index"
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
          :data-aos-delay="200 + index * 100"
            >
              <div class="pricing-single-item">
            <div class="pricing-header">
              <h3 class="text-white">{{ plan.title }}</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">{{ plan.price }}</span>
                <span class="period">/month</span>
              </div>
              <p class="text-silver">{{ plan.description }}</p>
            </div>
            <div class="pricing-features">
              <ul class="list-unstyled">
                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex">
                  <i class="ri-checkbox-circle-line"></i>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="pricing-footer">
              <RouterLink :to="plan.link" class="btn">
                <span class="border-style">Get Started</span>
                  </RouterLink>
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
  name: "PricingPlans",
  data() {
    return {
      plans: [
        {
          title: "3 Days Trial",
          price: "19.99",
          description: "Try our service risk-free with full access to all features",
          features: [
            "10,000+ Live TV Channels",
            "HD & 4K Quality Streaming",
            "Movies & TV Shows VOD",
            "Multi-Device Support",
            "24/7 Customer Support",
            "EPG (Electronic Guide)",
            "PPV & Sports Events"
          ],
          link: "/register"
        },
        {
          title: "3 Months Plan",
          price: "29.99",
          description: "Perfect for short-term streaming needs",
          features: [
            "25,000+ Live TV Channels",
            "HD & 4K Quality Streaming",
            "Movies & TV Shows VOD",
            "Multi-Device Support",
            "24/7 Customer Support",
            "EPG (Electronic Guide)",
            "PPV & Sports Events",
            "Anti-Freeze Technology"
          ],
          link: "/register"
        },
        {
          title: "12 Months Plan",
          price: "89.99",
          description: "Best value for long-term streaming",
          features: [
            "25,000+ Live TV Channels",
            "HD & 4K Quality Streaming",
            "Movies & TV Shows VOD",
            "Multi-Device Support",
            "24/7 Customer Support",
            "EPG (Electronic Guide)",
            "PPV & Sports Events",
            "Anti-Freeze Technology",
            "Premium Sports Channels"
          ],
          link: "/register"
        }
      ]
    };
  }
});
</script>

<style scoped>
.pricing-single-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.pricing-single-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--primary-color);
}

.pricing-header {
  text-align: center;
  margin-bottom: 30px;
}

.pricing-header h3 {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}

.price {
  margin-bottom: 20px;
}

.price .currency {
  font-size: 24px;
  vertical-align: top;
  margin-right: 5px;
}

.price .amount {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary-color);
}

.price .period {
  font-size: 16px;
  color: var(--text-color);
}

.pricing-features ul li {
  color: var(--text-color);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.pricing-features ul li i {
  color: var(--primary-color);
  margin-right: 10px;
  font-size: 20px;
}

.pricing-footer {
  text-align: center;
  margin-top: 30px;
}

.pricing-footer .btn {
  width: 100%;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  background: var(--primary-color);
  color: #fff;
  transition: all 0.3s ease;
}

.pricing-footer .btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

@media (max-width: 991px) {
  .pricing-single-item {
    margin-bottom: 30px;
  }
}
</style>
