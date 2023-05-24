import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import { BsFillSendFill } from 'react-icons/bs';

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        icon: <BsFillSendFill />,
        text: 'Icon',
    },
};
