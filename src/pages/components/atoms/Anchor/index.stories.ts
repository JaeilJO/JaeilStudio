import type { Meta, StoryObj } from "@storybook/react";
import Anchor from ".";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Anchor> = {
  title: "Atoms/Anchor",
  component: Anchor,
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Primary: Story = {
  args: {
    text: "anchor",
    href: "anchor",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const anchor = canvas.getByText("anchor");
    expect(await anchor).toHaveAttribute("href", "/#anchor");
  },
};

export const Disable: Story = {
  args: {
    text: "disable",
    href: "disable",
    disabled: true,
  },
};
