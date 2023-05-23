import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '.';
import { BsFillSendFill } from 'react-icons/bs';

const meta: Meta<typeof Navigation> = {
    title: 'Navigation',
    component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
    args: {},
};
