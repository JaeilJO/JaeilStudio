import type { Meta, StoryObj } from "@storybook/react";
import SkillSelector from ".";

const meta: Meta<typeof SkillSelector> = {
  title: "SkillSelector",
  component: SkillSelector,
};

export default meta;
type Story = StoryObj<typeof SkillSelector>;

export const Primary: Story = {
  args: {},
};
