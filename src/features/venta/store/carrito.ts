import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item } from "../entities/Item";
import { CartStore } from "../entities/CartStore";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: Item) =>
        set((state) => ({ items: [...state.items, item] })),
      removeItem: (item: Item) =>
        set((state) => ({
          items: state.items.filter((Item) => Item !== item),
        })),
      getMontoTotal: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.monto, 0);
      },
    }),
    {
      name: "cart_store", // Nombre del almacenamiento en localStorage
      partialize: (state) => ({ items: state.items }), // Qué parte del estado se guarda
    }
  )
);
