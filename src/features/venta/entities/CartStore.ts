import { Item } from "./Item";

export type CartStore = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  getMontoTotal: () => number;
};
