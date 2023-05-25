import type { Meta, StoryObj } from "@storybook/react";
import CarouselSection from ".";

const meta: Meta<typeof CarouselSection> = {
  title: "CarouselSection",
  component: CarouselSection,
};

export default meta;
type Story = StoryObj<typeof CarouselSection>;

export const Primary: Story = {
  args: {},
};
