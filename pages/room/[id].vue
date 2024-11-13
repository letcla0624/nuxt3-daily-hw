<script setup lang="ts">
import { getRoomDetails } from "~/actions/roomActions";

// 串接 API 取得房型詳細資料
// API path : https://nuxr3.zeabur.app/api/v1/rooms/{id}
// 將資料渲染至下方的 div.room-page 區塊

const router = useRouter();
const route = useRoute();
const room = await getRoomDetails(route.params.id as string); // 取得詳細房型
</script>

<template>
  <h2>房型詳細頁面</h2>
  <div class="container">
    <button type="button" class="btn btn-primary" @click="router.go(-1)">
      回上一頁
    </button>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="room-page">
          <div class="room-header">
            <h1 class="room-name">{{ room?.name }}</h1>
            <p class="room-description">
              {{ room?.description }}
            </p>
          </div>
          <div class="room-gallery">
            <img
              :src="room?.imageUrl"
              :alt="room?.name"
              class="room-main-image"
            />
            <div class="room-image-list">
              <img
                v-for="(imgUrl, index) in room?.imageUrlList"
                :key="index + 2"
                :src="imgUrl"
                :alt="`圖片${index + 2}`"
              />
            </div>
          </div>
          <div class="room-info">
            <div class="info-block">
              <h2>房間資訊</h2>
              <p>面積: {{ room?.areaInfo }}</p>
              <p>床型: {{ room?.bedInfo }}</p>
              <p>最多容納人數: {{ room?.maxPeople }}</p>
              <p>價格: NT${{ room?.price }}</p>
            </div>
            <div class="info-block">
              <h2>房間配置</h2>
              <ul>
                <li
                  v-for="layoutInfo in room?.layoutInfo"
                  :key="layoutInfo.title"
                >
                  {{ layoutInfo.title }}:
                  {{ layoutInfo.isProvide && "提供" }}
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h2>房內設施</h2>
              <ul>
                <li
                  v-for="facilityInfo in room?.facilityInfo"
                  :key="facilityInfo.title"
                >
                  {{ facilityInfo.title }}:
                  {{ facilityInfo.isProvide && "提供" }}
                </li>
              </ul>
            </div>
            <div class="info-block">
              <h2>客房備品</h2>
              <ul>
                <li
                  v-for="amenityInfo in room?.amenityInfo"
                  :key="amenityInfo.title"
                >
                  {{ amenityInfo.title }}: {{ amenityInfo.isProvide && "提供" }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.room {
  &-page {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  &-header {
    text-align: center;
    margin-bottom: 30px;
  }

  &-name {
    font-size: 2rem;
    color: #333;
  }

  &-description {
    font-size: 1rem;
    color: #666;
  }

  &-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  &-main-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  &-image-list {
    display: flex;
    justify-content: center;
    gap: 10px;

    img {
      width: 100px;
      height: auto;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.info-block {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #444;
  }

  p,
  ul {
    font-size: 1rem;
    color: #555;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 5px;
    }
  }
}
</style>
