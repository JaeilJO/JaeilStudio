import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

const meta: Meta<typeof Pagination> = {
    title: 'ProjectCarousel/Pagination',
    component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
    args: {},
};
