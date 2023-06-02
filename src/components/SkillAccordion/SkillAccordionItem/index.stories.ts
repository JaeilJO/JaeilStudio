import type { Meta, StoryObj } from "@storybook/react";
import SkillAccordionItem from ".";

const meta: Meta<typeof SkillAccordionItem> = {
  title: "SkillAccordion/SkillAccordionItem",
  component: SkillAccordionItem,
};

export default meta;
type Story = StoryObj<typeof SkillAccordionItem>;

export const Primary: Story = {
  args: {},
};
