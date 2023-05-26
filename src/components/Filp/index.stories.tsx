import type { Meta, StoryObj } from "@storybook/react";
import Flip from ".";

const meta: Meta<typeof Flip> = {
  title: "Flip",
  component: Flip,
};

export default meta;
type Story = StoryObj<typeof Flip>;

export const Primary: Story = {
  args: {},
};
