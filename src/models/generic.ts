import type { UsersData } from "./dataUsers";

export type ServiceResponse = {   
  data: UsersData;
  error: Error;
};

export type Error = {
  code: number;
  message: string;
  status: string;
};
