export interface ItemType {
    key: number;
    title: string;
    git_link: string;
    img?: any;
    skills: string[];
    sub_scribe: string;
    video?: any;
}
const ProjectsConfig = [
    {
        key: 0,
        title: 'Title1',
        git_link: 'www.anything',
        skills: ['nextjs', 'react', 'stroybook', 'redux', 'zustand', 'styled_components'],
        sub_scribe: 'Hello',
    },
    {
        key: 1,
        title: 'Title2',
        git_link: 'www.anything',
        skills: ['nextjs', 'react', 'stroybook'],
        sub_scribe: 'Hello Title 2',
    },
    {
        key: 2,
        title: 'Title3',
        git_link: 'www.anything',
        skills: ['nextjs', 'react', 'stroybook', 'redux'],
        sub_scribe: 'Hello Title3',
    },
];

export default ProjectsConfig;
