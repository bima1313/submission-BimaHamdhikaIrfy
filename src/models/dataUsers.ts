export type UsersData = {
  items: UserData[];
};

export type UserData = {
  name: string;
  photo: string;
  age: string;
  country: string;
  interest: string;
  net_worth: string;
  posX: number;
  posY: number;
  posZ?: number;
  faces?: number;
};
