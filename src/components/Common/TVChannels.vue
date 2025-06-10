<template>
  <div class="channels-area pb-100">
    <div class="container mw-1356">
      <div
        class="section-title mw-690 m-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="top-title">PREMIUM CHANNELS</span>
        <h2 :class="className">
          Access 100,000+ Live TV Channels From Around The World
        </h2>
      </div>
    </div>

    <div class="container-fluid p-0 mt-5">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :centeredSlides="false"
        :preventClicks="true"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :breakpoints="{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 15,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: 'row'
            }
          },
        }"
        :modules="modules"
        :grid="{
          rows: 2,
          fill: 'row'
        }"
        class="channels-slide"
      >
        <SwiperSlide v-for="channel in channels" :key="channel.id">
          <div class="channel-card">
            <div class="channel-image">
              <img :src="channel.image" :alt="channel.name" class="w-100" />
              <div class="channel-overlay">
                <div class="channel-actions">
                  <button class="watch-btn"><i class="ri-play-fill"></i> Watch</button>
                </div>
              </div>
            </div>
            <div class="channel-info">
              <h5 class="channel-name">{{ channel.name }}</h5>
              <span class="channel-category">{{ channel.category }}</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="text-center mt-5 pt-2">
      <p class="text-silver">Experience premium channels from around the world</p>
      <RouterLink to="/pricing-plan" class="btn btn-cta mt-3">
        <span class="border-style">View All Channels</span>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Grid, Navigation } from "swiper/modules";

export default defineComponent({
  name: "TVChannels",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["className"],
  data() {
    return {
      channels: [
        {
          id: 1,
          image: require("@/assets/images/tv-channels/abc-logo-2013-default-us.png"),
          name: "ABC",
          category: "Entertainment",
        },
        {
          id: 2,
          image: require("@/assets/images/tv-channels/cartoon-network-us.png"),
          name: "Cartoon Network",
          category: "Kids",
        },
        {
          id: 3,
          image: require("@/assets/images/tv-channels/cbs-news-us.png"),
          name: "CBS News",
          category: "News",
        },
        {
          id: 4,
          image: require("@/assets/images/tv-channels/cooking-channel-us.png"),
          name: "Cooking Channel",
          category: "Lifestyle",
        },
        {
          id: 5,
          image: require("@/assets/images/tv-channels/create-us.png"),
          name: "Create",
          category: "Education",
        },
        {
          id: 6,
          image: require("@/assets/images/tv-channels/discovery-channel-us.png"),
          name: "Discovery Channel",
          category: "Documentary",
        },
        {
          id: 7,
          image: require("@/assets/images/tv-channels/espn-us.png"),
          name: "ESPN",
          category: "Sports",
        },
        {
          id: 8,
          image: require("@/assets/images/tv-channels/fight-network-us.png"),
          name: "Fight Network",
          category: "Sports",
        },
        {
          id: 9,
          image: require("@/assets/images/tv-channels/food-network-us.png"),
          name: "Food Network",
          category: "Lifestyle",
        },
        {
          id: 10,
          image: require("@/assets/images/tv-channels/fox-news-us.png"),
          name: "FOX News",
          category: "News",
        },
        {
          id: 11,
          image: require("@/assets/images/tv-channels/hbo-us.png"),
          name: "HBO",
          category: "Entertainment",
        },
        {
          id: 12,
          image: require("@/assets/images/tv-channels/nasa-tv-us.png"),
          name: "NASA TV",
          category: "Science",
        },
        {
          id: 13,
          image: require("@/assets/images/tv-channels/nba-finals-us.png"),
          name: "NBA Finals",
          category: "Sports",
        },
        {
          id: 14,
          image: require("@/assets/images/tv-channels/nickelodeon-us.png"),
          name: "Nickelodeon",
          category: "Kids",
        },
        {
          id: 15,
          image: require("@/assets/images/tv-channels/paramount-plus-us.png"),
          name: "Paramount+",
          category: "Entertainment",
        },
        {
          id: 16,
          image: require("@/assets/images/tv-channels/pbs-kids-dot-icon-us.png"),
          name: "PBS Kids",
          category: "Kids",
        },
        {
          id: 17,
          image: require("@/assets/images/tv-channels/starz-us.png"),
          name: "STARZ",
          category: "Entertainment",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Grid, Navigation],
    };
  },
});
</script>

<style scoped>
.channels-area {
  overflow: hidden;
  position: relative;
  padding-top: 20px;
}

.channel-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  transform: translateY(0);
  height: 100%;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.channel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.12);
}

.channel-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
}

.channel-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.channel-card:hover .channel-image img {
  transform: scale(1.08);
}

.channel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.channel-card:hover .channel-overlay {
  opacity: 1;
}

.channel-info {
  margin-top: 12px;
  text-align: center;
  padding: 0 5px;
}

.channel-name {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.channel-category {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  display: block;
}

.watch-btn {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.watch-btn:hover {
  background-color: #e04f32;
}

.watch-btn i {
  margin-right: 4px;
  font-size: 14px;
}

.btn-cta {
  margin-top: 15px;
  transition: transform 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
}

/* Add swiper grid styles */
:deep(.swiper-grid) {
  margin-top: 20px;
}

:deep(.swiper-wrapper) {
  padding: 10px 0;
}

@media (max-width: 768px) {
  .channel-card {
    padding: 10px;
  }

  .channel-image {
    height: 60px;
  }

  .channel-name {
    font-size: 12px;
  }

  .channel-category {
    font-size: 10px;
  }

  .watch-btn {
    padding: 4px 10px;
    font-size: 11px;
  }
}
</style>
