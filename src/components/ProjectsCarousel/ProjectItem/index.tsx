import { BsGithub } from 'react-icons/bs';
import Icon from '../../atoms/Icon';
import S from './index.styled';

interface ProjectItemProps {
    title: string;
    git_link?: string;
    img?: any;
}

function ProjectItem({ title, git_link, img }: ProjectItemProps) {
    return (
        <S.Container>
            {img ? <S.Image alt={title} src={img} /> : <S.NoneImage />}

            <S.Title>{title}</S.Title>

            {git_link ? (
                <Icon font_size={'sub_title_03'} font_weight={'light'} icon={<BsGithub />} type="black" />
            ) : (
                <></>
            )}
        </S.Container>
    );
}

export default ProjectItem;
