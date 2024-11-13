export interface Room<T> {
  status: boolean;
  result: T;
}

export interface RoomResult {
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
