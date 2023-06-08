import ProjectModal from '@/components/ProjectModal';
import Header from '@/components/layouts/Header';
import Main from '@/components/layouts/Main';
import MainConfig from '@/util/MainConfig';
import { useModalStore } from '@/zustand/store';

export default function Home() {
    const [modal_visible] = useModalStore((state) => [state.modal_visible]);
    return (
        <>
            {modal_visible ? <ProjectModal /> : null}
            <Header />
            <Main items={MainConfig.items} />
        </>
    );
}
