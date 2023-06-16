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
        title: 'Jaeil Studio',
        git_link: 'https://github.com/JaeilJO/JaeilStudio',
        skills: ['nextjs', 'react', 'stroybook', 'zustand', 'styled_components'],
        sub_scribe: 'This is my first web site',
    },
];

export default ProjectsConfig;
