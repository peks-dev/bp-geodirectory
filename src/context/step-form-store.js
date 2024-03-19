import { create } from "zustand";
import { persist } from "zustand/middleware";
import { saveToLocalStorage } from "@/utilities/save-to-local-storage.utilitie";
import CourtModel from "@/models/court.model";

const blankStepFormData = new CourtModel();

const initialState = {
  started: false,
  currentStep: 0,
};

export const useStepFormStore = create(
  persist(
    (set) => ({
      ...initialState,
      startedChange: () => {
        saveToLocalStorage("stepFormData", blankStepFormData);
        set((state) => ({ ...state, started: !state.started }));
      },
      nextStep: (e) =>
        set((state) => {
          if (state.currentStep < 5) {
            return { ...state, currentStep: state.currentStep + 1 };
          }
        }),
      prevStep: (e) =>
        set((state) => {
          if (state.currentStep > 0) {
            return { ...state, currentStep: state.currentStep - 1 };
          }
        }),
      reset: () => {
        set(initialState);
      },
    }),
    { name: "step-form", skipHydration: true }
  )
);
