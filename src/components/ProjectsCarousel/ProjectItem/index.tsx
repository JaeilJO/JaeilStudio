import { BsGithub } from 'react-icons/bs';
import Icon from '../../atoms/Icon';
import S from './index.styled';
import { useModalStore } from '@/zustand/store';

interface ProjectItemProps {
    title: string;
    git_link?: string;
    img?: any;
    skills: string[];
    sub_scribe: string;
    video?: any;
}

function ProjectItem({ title, git_link, img, skills, sub_scribe, video }: ProjectItemProps) {
    const gitLinkHandler = () => {
        window.open(git_link, '_blank');
    };
    const [openModal] = useModalStore((state) => [state.openModal]);

    const modalHandler = () => {
        openModal({ title: title, skills: skills, sub_scribe: sub_scribe, video: video, modal_visible: true });
    };
    return (
        <S.Container>
            {img ? <S.Image alt={title} src={img} onClick={modalHandler} /> : <S.NoneImage onClick={modalHandler} />}

            <S.Title>{title}</S.Title>

            {git_link ? (
                <Icon
                    font_size={'sub_title_03'}
                    font_weight={'light'}
                    icon={<BsGithub />}
                    on_click={gitLinkHandler}
                    type="black"
                />
            ) : (
                <></>
            )}
        </S.Container>
    );
}

export default ProjectItem;
