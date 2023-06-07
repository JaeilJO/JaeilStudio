import { create } from "zustand";

type State = {
  modalVisible: boolean;
};

type Action = {
  handleModal: () => void;
};

const useModalStore = create<State & Action>()((set) => ({
  modalVisible: false,
  handleModal: () => set((state) => ({ modalVisible: !state.modalVisible })),
}));
