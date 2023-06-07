import type { Meta, StoryObj } from "@storybook/react";
import ProjectModal from ".";

const meta: Meta<typeof ProjectModal> = {
  title: "ProjectModal",
  component: ProjectModal,
};

export default meta;
type Story = StoryObj<typeof ProjectModal>;

export const Primary: Story = {
  args: {},
};
