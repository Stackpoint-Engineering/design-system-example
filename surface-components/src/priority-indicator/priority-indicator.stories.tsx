import type { Meta, StoryObj } from "@storybook/react";
import {
  PriorityIndicator,
  PriorityIndicatorProps,
} from "./priority-indicator";

const meta: Meta<typeof PriorityIndicator> = {
  title: "Core Components/PriorityIndicator",
  component: PriorityIndicator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const PriorityIndicatorWrapper = ({ priority }: PriorityIndicatorProps) => {
  return (
    <div>
      <PriorityIndicator priority={priority} />
      <div className="mt-4">{`This is priority: ${priority}`}</div>
    </div>
  );
};

export const Playground: Story = {
  argTypes: {
    priority: {
      control: { type: "radio" },
      options: ["low", "medium", "high", "archive"],
    },
  },
  args: { priority: "low" },
  render: ({ priority }) => <PriorityIndicatorWrapper priority={priority} />,
};

export const AllPriorities: Story = {
  render: () => (
    <div className="space-y-2">
      <PriorityIndicatorWrapper priority="low" />
      <PriorityIndicatorWrapper priority="medium" />
      <PriorityIndicatorWrapper priority="high" />
      <PriorityIndicatorWrapper priority="archive" />
    </div>
  ),
};
