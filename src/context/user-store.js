import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserLocation } from "@/utilities/geolocation";

const inicialState = {
  userCoordinates: null,
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...inicialState,
      getUserCoordinates: async () => {
        try {
          const res = await getUserLocation();
          set((state) => ({ ...state, userCoordinates: res })); // Actualiza el estado con las coordenadas obtenidas
        } catch (error) {
          console.error("Error al obtener la ubicación del usuario:", error);
        }
      },
    }),
    { name: "user-store" }
  )
);
