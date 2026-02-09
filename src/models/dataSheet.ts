import type { Error } from "./generic";

export type DataSheet = {
  majorDimension: string;
  range: string;
  values: Data[];
  error: Error;
};

type Data = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};
