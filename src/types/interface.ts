export interface IPlace {
  deleteAt: boolean;
  _id: string;
  name: string;
  province: string;
  country: string;
  valueate: number;
  __v: number;
  image: string;
}

export interface IRoom extends IPlace {
  bedRoom: number;
  bath: number;
  description: string;
  price: boolean;
  image: string;
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
  email: string;
  password: string;
  phone: string;
  gender: boolean;
  type: string;
  __v: number;
}
