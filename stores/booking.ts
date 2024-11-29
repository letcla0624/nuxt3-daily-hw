// 建立名稱為 useBookingStore 的 store

export interface RoomInfo {
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

export interface RoomResult<T> {
  status: boolean;
  result: T;
}

export const useBookingStore = defineStore("booking", () => {
  const bookingInfo = ref<RoomInfo>({
    _id: "",
    name: "",
    description: "",
    imageUrl: "",
    imageUrlList: [],
    areaInfo: "",
    bedInfo: "",
    maxPeople: 0,
    price: 0,
    status: 0,
    layoutInfo: [],
    facilityInfo: [],
    amenityInfo: [],
    createdAt: "",
    updatedAt: "",
  });

  const setBookingInfo = (bookingData: RoomInfo) => {
    bookingInfo.value = bookingData;
  };

  return { bookingInfo, setBookingInfo };
});
