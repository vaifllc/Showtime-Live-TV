<template>
  <div class="si-fan-fact-area pb-100">
    <div class="container">
      <div class="si-fan-fact-wrap">
        <div class="row justify-content-center g-5">
          <div
            v-for="(fact, index) in fanFacts"
            :key="index"
            class="col"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="(index + 1) * 100"
          >
            <div class="si-fan-fact-item">
              <h1>
                <span class="counter">{{ fact.value }}</span>
                <span>{{ fact.suffix }}</span>
              </h1>
              <p>
                {{ fact.title }} <span>{{ fact.highlight }}</span>
              </p>
              <div class="shape">
                <img
                  src="@/assets/images/satellite-internet/fan-fact-shape.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface FanFact {
  value: number | string;
  suffix: string;
  title: string;
  highlight: string;
}

export default defineComponent({
  name: "FanFact",
  data(): { fanFacts: FanFact[] } {
    return {
      fanFacts: [
        { value: 10, suffix: "+", title: "YEARS OF", highlight: "EXPERIENCE" },
        { value: 25, suffix: "GB", title: "BANDWIDTH", highlight: "CAPACITY" },
        { value: 20, suffix: "K+", title: "TV", highlight: "CHANNELS" },
        { value: 99, suffix: "%", title: "UPTIME", highlight: "GUARANTEE" },
        { value: 9, suffix: "K+", title: "SATISFIED", highlight: "CLIENTS" },
      ],
    };
  },
});
</script>
