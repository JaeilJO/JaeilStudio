import { create } from 'zustand';

type State = {
    modal_visible?: boolean;
    title: string;
    skills: string[];
    sub_scribe: string;
    video?: any;
};

type Action = {
    openModal: (info: State) => void;
    closeModal: () => void;
};

export const useModalStore = create<State & Action>()((set) => ({
    modal_visible: false,
    title: '',
    skills: [''],
    sub_scribe: '',
    video: null,
    openModal: ({ title, skills, sub_scribe, video }) =>
        set(() => ({ modal_visible: true, title: title, skills: skills, sub_scribe: sub_scribe, video: video })),
    closeModal: () => set(() => ({ modal_visible: false, title: '', skills: [''], sub_scribe: '', video: null })),
}));
