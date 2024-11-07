<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    default: "",
  },
  altText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="product-image">
    <img :src="imageSrc" :alt="altText" />
  </div>
</template>

<style scoped>
.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}
</style>
