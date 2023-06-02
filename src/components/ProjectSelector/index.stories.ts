import type { Meta, StoryObj } from "@storybook/react";
import ProjectSelector from ".";

const meta: Meta<typeof ProjectSelector> = {
  title: "ProjectSelector",
  component: ProjectSelector,
};

export default meta;
type Story = StoryObj<typeof ProjectSelector>;

export const Primary: Story = {
  args: {},
};
