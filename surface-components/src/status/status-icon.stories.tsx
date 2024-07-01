import type { Meta, StoryObj } from "@storybook/react";
import { StatusIcon, StatusIconProps, Status } from "./status-icon";

const meta: Meta<typeof StatusIcon> = {
  title: "Core Components/StatusIcon",
  component: StatusIcon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const StatusIconWrapper = ({ status }: StatusIconProps) => {
  return (
    <div className="flex items-center space-x-4">
      <StatusIcon status={status} />
      <span>{status}</span>
    </div>
  );
};

export const Playground: Story = {
  argTypes: {
    status: {
      control: { type: "radio" },
      options: Object.values(Status),
    },
  },
  args: { status: Status.Completed },
  render: ({ status }) => <StatusIconWrapper status={status} />,
};

export const AllStatuses: Story = {
  render: () => (
    <div className="space-y-2">
      {Object.values(Status).map((status) => (
        <StatusIconWrapper key={status} status={status} />
      ))}
    </div>
  ),
};
