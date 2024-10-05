import { create } from 'zustand';

interface ButtonMenuState {
  selectedButton: string | null;
  setSelectedButton: (button: string | null) => void;
}

export const useButtonMenu = create<ButtonMenuState>((set) => ({
  selectedButton: null,
  setSelectedButton: (button: string | null) => set({ selectedButton: button }),
}));
