export interface IPlace {
  deleteAt: boolean;
  _id: string;
  name: string;
  province: string;
  country: string;
  valueate: number;
  __v: number;
  image: string | undefined;
}

export interface IRoom extends IPlace {
  bedRoom: number;
  bath: number;
  description: string;
  guests: string;
  hotTub: string;
  price: string;
  locationId: any;
  image: string | undefined;
  cableTV: boolean;
  dryer: boolean;
  elevator: boolean;
  gym: boolean;
  heating: boolean;
  kitchen: boolean;
  pool: boolean;
  wifi: boolean;
}

export interface IUser {
  tickets: [] | null;
  deleteAt: boolean;
  _id: string;
  name: string;
  locationId: any;
  email: string;
  password: string;
  phone: string;
  gender: boolean;
  type: string;
  __v: number;
}
