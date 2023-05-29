import type { Meta, StoryObj } from "@storybook/react";
import Selector from ".";

const meta: Meta<typeof Selector> = {
  title: "Selector",
  component: Selector,
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Primary: Story = {
  args: {},
};
