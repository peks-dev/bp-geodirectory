import { login, logout, register } from "@/services/supabase/auth.service";
import { fetchDataOnTable } from "@/services/supabase/table-operations.service";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import UserModel from "@/models/user.model";

const inicialState = new UserModel();

export const useUserStore = create(
  persist(
    (set) => ({
      ...inicialState,
      loginUser: async (email, password) => {
        try {
          const response = await login(email, password);
          set((state) => ({
            ...state,
            id: response.user.id,
            session: response.session,
            email: response.user.email,
          }));
          const userData = await fetchDataOnTable(
            "profiles",
            "id",
            response.user.id
          );
          set((state) => ({
            ...state,
            apodo: userData[0].apodo,
            avatar_url: userData[0].avatar_url,
            bio: userData[0].bio,
            website: userData[0].website,
          }));
        } catch (error) {
          throw error;
        }
      },
      logOut: async () => {
        await logout();
        set(inicialState);
      },
    }),
    { name: "user-store", skipHydration: true }
  )
);
