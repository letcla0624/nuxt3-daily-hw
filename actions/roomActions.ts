import type { Room, RoomResult } from "~/types/room";

const apiUrl = process.env.API_URL;

// 取得所有房型
export async function getRooms() {
  try {
    const data = await $fetch<Room<RoomResult[]>>(`${apiUrl}/rooms`);
    return data.result;
  } catch (error) {
    console.error(error, "找不到房間！api 路徑是否出錯？");
  }
}

// 取得詳細房型
export async function getRoomDetails(id: string) {
  try {
    const data = await $fetch<Room<RoomResult>>(`${apiUrl}/rooms/${id}`);
    return data.result;
  } catch (error) {
    console.error(error, "不要亂打，沒有此 id 的房型！");
  }
}
