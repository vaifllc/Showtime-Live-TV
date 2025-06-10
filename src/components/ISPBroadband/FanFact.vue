<template>
  <div class="fan-facet-area ptb-100">
    <div class="container mw-1356">
      <div class="fan-facet-wrap">
        <div
          class="d-flex justify-content-lg-between justify-content-center gap-3 gap-md-4 gap-lg-0 align-items-center flex-wrap"
        >
          <div
            v-for="(fact, index) in facts"
            :key="index"
            class="fan-facet-single-item"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="(index + 1) * 100"
          >
            <h1>
              <span class="counter">{{ fact.value }}</span
              ><span>{{ fact.suffix }}</span>
            </h1>
            <p>{{ fact.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FanFact",
  setup() {
    const facts = ref([
      { value: 10, suffix: "+", label: "YEARS OF EXPERIENCE" },
      { value: 25, suffix: "GB", label: "BANDWIDTH CAPACITY" },
      { value: 20, suffix: "K", label: "TV CHANNELS" },
      { value: 99, suffix: "%", label: "UPTIME GUARANTEE" },
      { value: 9, suffix: "K+", label: "SATISFIED CLIENTS" },
    ]);

    return { facts };
  },
});
</script>
