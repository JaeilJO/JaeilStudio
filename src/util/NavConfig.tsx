import { NavigationItem } from '@/components/Navigation';
import { FontSizeType } from '@/styles/theme';
import { BsBootstrapFill, BsGithub } from 'react-icons/bs';

interface NavConfigType {
    options: {
        font_size: keyof FontSizeType;
    };
    items: NavigationItem[];
}

const NavConfig: NavConfigType = {
    options: {
        font_size: 'sub_title_03',
    },
    items: [
        { key: 1, type: 'anchor', text: 'Home', href: 'home' },
        { key: 2, type: 'anchor', text: 'About', href: 'about' },
        { key: 3, type: 'anchor', text: 'Skills', href: 'skills' },
        { key: 4, type: 'anchor', text: 'Projects', href: 'projects' },
        { key: 5, type: 'anchor', text: 'Contact', href: 'contact' },
        { key: 6, type: 'icon', icon: <BsGithub />, text: 'Github' },
        { key: 7, type: 'icon', icon: <BsBootstrapFill />, text: 'Blog' },
    ],
};

export default NavConfig;
