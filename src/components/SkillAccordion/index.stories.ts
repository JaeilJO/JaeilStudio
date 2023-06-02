import type { Meta, StoryObj } from "@storybook/react";
import SkillAccordion from ".";

const meta: Meta<typeof SkillAccordion> = {
  title: "SkillAccordion/SkillAccordion",
  component: SkillAccordion,
};

export default meta;
type Story = StoryObj<typeof SkillAccordion>;

export const Primary: Story = {
  args: {},
};
