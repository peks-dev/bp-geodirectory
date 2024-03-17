import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  started: false,
  currentStep: 0,
  location: null,
};

export const useStepFormStore = create(
  persist(
    (set) => ({
      ...initialState,
      startedChange: () => set((state) => ({ started: !state.started })),
      nextStep: (e) =>
        set((state) => {
          if (state.currentStep < 5) {
            return { currentStep: state.currentStep + 1 };
          }
        }),
      prevStep: (e) =>
        set((state) => {
          if (state.currentStep > 0) {
            return { currentStep: state.currentStep - 1 };
          }
        }),
      reset: () => {
        set(initialState);
      },
    }),
    { name: "step-form", skipHydration: true }
  )
);
