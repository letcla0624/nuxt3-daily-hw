<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div>
    <h2>詳細房型頁面</h2>
    <button type="button" class="btn btn-primary" @click="router.go(-1)">
      回上一頁
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
