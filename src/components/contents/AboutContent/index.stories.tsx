import type { Meta, StoryObj } from "@storybook/react";
import AboutContent from ".";
import Section from "../../Section";

const meta: Meta<typeof AboutContent> = {
  title: "Contents/AboutContent",
  component: AboutContent,
  decorators: [
    (Story) => (
      <Section
        id={"section"}
        content={<Story />}
        type="black"
        option={{
          left: false,
          right: false,
        }}
      ></Section>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AboutContent>;

export const Primary: Story = {
  args: {},
};