import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";

import { NavigationItems } from "../layouts/Header/NavigationItems";

const meta: Meta<typeof Navigation> = {
  title: "Navigation",
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  args: {
    options: NavigationItems.options,
    items: NavigationItems.items,
  },
};
