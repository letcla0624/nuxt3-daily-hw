<script setup lang="ts">
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

// API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
// 使用 ES6 fetch() 或是 axios.get() 串接 API
// 切換 isLoading 狀態

const { newsList, getNewsList, isLoading } = useHome();

onMounted(() => {
  getNewsList();
});
</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <!-- <NewsCard v-for="..." :key="..."  v-bind="..." /> -->

    <NewsCard
      v-for="news in newsList"
      :key="news._id"
      :image="news.image"
      :title="news.title"
      :description="news.description"
      :created-at="news.createdAt"
      :updated-at="news.updatedAt"
    />
    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
