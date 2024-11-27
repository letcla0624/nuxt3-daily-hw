<script setup lang="ts">
// https://www.npmjs.com/package/vue-loading-overlay

const { $useLoading } = useNuxtApp();

// loading 樣式調整
const loading = $useLoading({
  loader: "dots",
  color: "Goldenrod",
  "background-color": "#000",
  opacity: 1,
});

function openLoading() {
  // 開啟讀取效果
  const loader = loading.show();
  setTimeout(() => {
    // 關閉讀取效果
    loader.hide();
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped></style>
