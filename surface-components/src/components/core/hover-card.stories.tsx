import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';
import { Button } from "./button";

interface HoverCardContentProps {
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const meta: Meta<HoverCardContentProps> = {
  title: 'shadcn/HoverCard',
  component: HoverCardContent,
  tags: ['autodocs'],
  argTypes: {
    className: { control: "text" },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
    sideOffset: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<HoverCardContentProps>;

export const Playground: Story = {
  args: {
    className: "",
    align: "center",
    sideOffset: 4,
  },
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger>
        <Button>Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent {...args}>
        <div className="text-sm">This is the hover card content.</div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const CustomAlignment: Story = {
  args: {
    className: "",
    align: "start",
    sideOffset: 4,
  },
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger>
        <Button>Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent {...args}>
        <div className="text-sm">Aligned to the start.</div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithCustomStyles: Story = {
  args: {
    className: "bg-blue-500 text-white rounded-md shadow-md p-4",
    align: "center",
    sideOffset: 4,
  },
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger>
        <Button>Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent {...args}>
        <div className="text-sm">
          This is the hover card with custom styles.
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithLongContent: Story = {
  args: {
    className: "",
    align: "center",
    sideOffset: 4,
  },
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger>
        <Button>Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent {...args}>
        <div className="text-sm">
          This is the hover card content with a longer message to show how it
          handles larger text.
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
