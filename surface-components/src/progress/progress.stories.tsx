import type { Meta, StoryObj } from "@storybook/react";
import { Progress, ProgressProps } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Core Components/Progress",
  component: Progress,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const workItemsExample = [
  { action: "Task 1", is_complete: true },
  { action: "Task 2", is_complete: false },
  { action: "Task 3", is_complete: true },
  { action: "Task 4", is_complete: false },
];

export const Playground: Story = {
  argTypes: {
    workItems: {
      control: { type: "object" },
    },
  },
  args: { workItems: workItemsExample },
  render: ({ workItems }) => <Progress workItems={workItems} />,
};

export const EmptyProgress: Story = {
  render: () => <Progress workItems={[]} />,
};

export const UndefinedProgress: Story = {
  render: () => <Progress workItems={undefined} />,
};

export const NullProgress: Story = {
  render: () => <Progress workItems={null} />,
};

export const VariousProgressStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Progress
          workItems={[
            { action: "Task 1", is_complete: false },
            { action: "Task 2", is_complete: false },
            { action: "Task 3", is_complete: false },
            { action: "Task 4", is_complete: false },
          ]}
        />
        <Progress
          workItems={[
            { action: "Task 1", is_complete: false },
            { action: "Task 2", is_complete: false },
            { action: "Task 3", is_complete: false },
            { action: "Task 4", is_complete: true },
          ]}
        />
        <Progress
          workItems={[
            { action: "Task 1", is_complete: false },
            { action: "Task 2", is_complete: false },
            { action: "Task 3", is_complete: true },
            { action: "Task 4", is_complete: true },
          ]}
        />
        <Progress
          workItems={[
            { action: "Task 1", is_complete: false },
            { action: "Task 2", is_complete: true },
            { action: "Task 3", is_complete: true },
            { action: "Task 4", is_complete: true },
          ]}
        />
        <Progress
          workItems={[
            { action: "Task 1", is_complete: true },
            { action: "Task 2", is_complete: true },
            { action: "Task 3", is_complete: true },
            { action: "Task 4", is_complete: true },
          ]}
        />
      </div>
    </div>
  ),
};
