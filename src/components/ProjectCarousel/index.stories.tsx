import type { Meta, StoryObj } from '@storybook/react';
import ProjectCarousel from '.';
import Section from '../Section';

const meta: Meta<typeof ProjectCarousel> = {
    title: 'ProjectCarousel/ProjectCarousel',
    component: ProjectCarousel,
};

export default meta;
type Story = StoryObj<typeof ProjectCarousel>;

export const Primary: Story = {
    args: {},
};
