import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { BsFillSendFill } from 'react-icons/bs';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {},
};

export const IconButton: Story = {
    args: {
        icon: <BsFillSendFill />,
        text: 'Icon',
    },
};
