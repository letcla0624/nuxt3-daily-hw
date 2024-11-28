// 建立名稱為 useBookingStore 的 store

interface RoomInfo {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  layoutInfo: LayoutInfo[];
  facilityInfo: LayoutInfo[];
  amenityInfo: LayoutInfo[];
  createdAt: string;
  updatedAt: string;
}

interface LayoutInfo {
  title: string;
  isProvide: boolean;
}

interface userInfo {
  address: object;
  name: string;
  phone: string;
  email: string;
  county: string;
  district: string;
  detail: string;
}

interface OrderInfo {
  roomInfo: RoomInfo;
  user: {
    userInfo: userInfo;
  };
}

export const useBookingStore = defineStore("booking", () => {
  // 訂單資訊的格式
  const bookingResult = ref({});

  // 加入訂單資訊
  const addOrderInfo = (orderInfo: OrderInfo) => {
    bookingResult.value = orderInfo;
  };

  return {
    bookingResult,
    addOrderInfo,
  };
});
