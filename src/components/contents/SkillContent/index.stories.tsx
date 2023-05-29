import type { Meta, StoryObj } from "@storybook/react";
import SkillContent from ".";
import Section from "../../Section";

const meta: Meta<typeof SkillContent> = {
  title: "Contents / SkillContent",
  component: SkillContent,
  decorators: [
    (Story) => <Section id={"section"} content={<Story />}></Section>,
  ],
};

export default meta;
type Story = StoryObj<typeof SkillContent>;

export const Primary: Story = {
  args: {},
};
