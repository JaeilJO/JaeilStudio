import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '.';
import { BsFillSendFill } from 'react-icons/bs';

const meta: Meta<typeof Navigation> = {
    title: 'Navigation',
    component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const NavigationItems = {
    options: {
        font_size: 'sub_title_01',
    },
    items: [
        { id: 1, type: 'anchor', text: 'About', href: '' },
        { id: 2, type: 'icon', icon: <BsFillSendFill />, text: 'Hello' },
    ],
};

export const Primary: Story = {
    args: {
        options: NavigationItems.options,
        items: NavigationItems.items,
    },
};
