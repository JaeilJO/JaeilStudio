import type { Meta, StoryObj } from '@storybook/react';
import AboutContent from '.';
import Section from '../../Section';

const meta: Meta<typeof AboutContent> = {
    title: 'Contents/AboutContent',
    component: AboutContent,
    decorators: [(Story) => <Section id={'section'} content={<Story />} type="black"></Section>],
};

export default meta;
type Story = StoryObj<typeof AboutContent>;

export const Primary: Story = {
    args: {},
};
