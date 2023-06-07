import { SectionProps } from '@/components/Section';
import MainContent from '../components/contents/MainContent/index';
import AboutContent from '../components/contents/AboutContent';
import SkillContent from '../components/contents/SkillContent';
import ProjectContent from '../components/contents/ProjectContent';

interface SectionPropsWithKey extends SectionProps {
    key: number;
    carousel?: boolean;
    contents?: React.ReactNode[];
}

export interface MainConfigItemsType {
    items: SectionPropsWithKey[];
}

const MainConfig: MainConfigItemsType = {
    items: [
        {
            key: 1,
            id: 'home',
            type: 'white',
            content: <MainContent />,
        },
        {
            key: 2,
            id: 'about',
            type: 'black',
            carousel: true,
            contents: [<AboutContent />],
        },
        {
            key: 3,
            id: 'skills',
            type: 'white',
            content: <SkillContent />,
        },
        {
            key: 4,
            id: 'projects',
            type: 'black',
            content: <ProjectContent />,
        },
        {
            key: 5,
            id: 'contact',
            type: 'white',
            content: <></>,
        },
    ],
};
export default MainConfig;
