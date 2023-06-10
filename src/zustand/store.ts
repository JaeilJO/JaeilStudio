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

type ContactState = {
    email: string;
    name: string;
    message: string;
};

type ContactAction = {
    inputEmail: ({ email }: { email: string }) => void;
    inputName: ({ name }: { name: string }) => void;
    inputMessage: ({ message }: { message: string }) => void;
};

export const useContactStore = create<ContactState & ContactAction>()((set) => ({
    email: '',
    name: '',
    message: '',
    inputEmail: ({ email }) => set((State) => ({ ...State, email: email })),
    inputName: ({ name }) => set((State) => ({ ...State, name: name })),
    inputMessage: ({ message }) => set((State) => ({ ...State, message: message })),
}));
