<script setup lang="ts">
import type { Room, RoomResult } from "~/types/room";

// 使用 fetch 或 axios 串接 前台房型 API ( GET )
// apiUrl : https://nuxr3.zeabur.app/api/v1/rooms
// response 回傳後，將資料寫入 roomsList 變數
// 使用 roomsList 變數在下方 template 渲染列表

const router = useRouter();
const config = useRuntimeConfig();

// 取得所有房型
const { data: roomsList } = await useAsyncData(
  "roomsList",
  () => $fetch<Room<RoomResult[]>>(`${config.public.apiUrl}/rooms`),
  { transform: (res) => res.result }
);
</script>

<template>
  <h2>房型頁面</h2>
  <div class="container mt-4 px-0">
    <div class="row justify-content-center g-3">
      <!-- v-for -->
      <div class="col-12 col-sm-8 col-md-6 col-lg-3" v-for="room in roomsList">
        <div
          class="card h-100 shadow-sm"
          @click="router.push(`/room/${room._id}`)"
        >
          <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ room.name }}</h3>
            <p class="card-text flex-grow-1">{{ room.description }}</p>
            <ul class="list-unstyled">
              <li><strong>面積:</strong> {{ room.areaInfo }}</li>
              <li><strong>床型:</strong> {{ room.bedInfo }}</li>
              <li><strong>最大容納人數:</strong> {{ room.maxPeople }}</li>
              <li><strong>價格:</strong> {{ room.price }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  &-img-top {
    object-fit: cover;
    height: 200px;
    max-width: 100%;
  }
}
</style>
