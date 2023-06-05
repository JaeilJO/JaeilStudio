import type { Meta, StoryObj } from '@storybook/react';
import ProjectContent from '.';
import Section from '../../Section';

const meta: Meta<typeof ProjectContent> = {
    title: 'Contents/ProjectContent',
    component: ProjectContent,
    decorators: [(Story) => <Section id={'project'} type="black" content={<Story />}></Section>],
};

export default meta;
type Story = StoryObj<typeof ProjectContent>;

export const Primary: Story = {
    args: {},
};
