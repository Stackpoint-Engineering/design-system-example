import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

type SeparatorProps = React.ComponentPropsWithoutRef<typeof Separator>;

const meta: Meta<SeparatorProps> = {
  title: "shadcn/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom class name for styling the Separator component",
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Orientation of the Separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is decorative",
    },
  },
};

export default meta;

type Story = StoryObj<SeparatorProps>;

export const Playground: Story = {
  render: (args) => <Separator {...args} />,
  args: {
    className: "",
    orientation: "horizontal",
    decorative: true,
  },
};

export const HorizontalSeparator: Story = {
  render: (args) => <Separator {...args} />,
  args: {
    className: "my-4",
    orientation: "horizontal",
    decorative: true,
  },
};

export const VerticalSeparator: Story = {
  render: (args) => <Separator {...args} />,
  args: {
    className: "mx-4 h-32",
    orientation: "vertical",
    decorative: true,
  },
};

export const DecorativeSeparator: Story = {
  render: (args) => <Separator {...args} />,
  args: {
    className: "my-4",
    orientation: "horizontal",
    decorative: true,
  },
};

export const NonDecorativeSeparator: Story = {
  render: (args) => <Separator {...args} />,
  args: {
    className: "my-4",
    orientation: "horizontal",
    decorative: false,
  },
};
