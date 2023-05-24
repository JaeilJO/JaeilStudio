import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";
import NavConfig from "/Users/jaeiljo/Desktop/JaeilStudio/src/util/NavConfig";

const meta: Meta<typeof Navigation> = {
  title: "Navigation",
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  args: {
    options: NavConfig.options,
    items: NavConfig.items,
  },
};
