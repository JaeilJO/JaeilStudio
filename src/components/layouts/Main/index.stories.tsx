import type { Meta, StoryObj } from "@storybook/react";
import Main from ".";
import MainConfig from "../../../util/MainConfig";

const meta: Meta<typeof Main> = {
  title: "Layout/Main",
  component: Main,
};

export default meta;
type Story = StoryObj<typeof Main>;

export const Primary: Story = {
  args: { items: MainConfig.items },
};
