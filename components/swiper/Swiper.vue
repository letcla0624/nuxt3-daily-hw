<script setup lang="ts">
import Swiper from "swiper";
import type { SwiperModule } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  modules: {
    type: Array as PropType<SwiperModule[]>,
    required: true,
  },
  autoplay: {
    type: Object,
    default: {
      delay: 3000,
    },
  },
  pagination: {
    type: Object,
    default: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  },
  navigation: {
    type: Object,
    default: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  loop: {
    type: Boolean,
    default: true,
  },
  slidesPerView: {
    type: Number,
    default: 1,
  },
});

const swiperRef = ref<HTMLElement | null>(null);
onMounted(() => {
  if (swiperRef.value === null) return;
  new Swiper(swiperRef.value!, props);
});
</script>

<template>
  <div class="swiper" ref="swiperRef">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<style lang="scss" scoped></style>
