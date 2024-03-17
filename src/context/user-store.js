import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserLocation } from "@/utilities/geolocation";

const inicialState = {
  location: null,
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...inicialState,
      getLocation: async () => {
        try {
          const res = await getUserLocation();
          set((state) => ({ ...state, location: res })); // Actualiza el estado con las coordenadas obtenidas
        } catch (error) {
          console.error("Error al obtener la ubicación del usuario:", error);
        }
      },
    }),
    { name: "user-store" }
  )
);
