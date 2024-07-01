import type { Meta, StoryObj } from "@storybook/react";
import { Assignee } from "./assignee";

const meta: Meta<typeof Assignee> = {
  title: "Core Components/Assignee",
  component: Assignee,
  tags: ["autodocs"],
  argTypes: {
    assignee: {
      control: "object",
      description:
        "Assignee object containing full_name, id, email_address, and avatar_url",
    },
    editable: {
      control: "boolean",
      description: "Flag indicating if the assignee is editable",
    },
  },
  args: {
    assignee: {
      full_name: "John Doe",
      id: "123",
      email_address: "john.doe@example.com",
      avatar_url: null,
    },
    editable: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Assignee {...args} />,
};

export const Basic: Story = {
  render: (args) => <Assignee {...args} />,
  args: {
    assignee: {
      full_name: "Jane Doe",
      id: "456",
      email_address: "jane.doe@example.com",
      avatar_url: null,
    },
    editable: false,
  },
};

export const Editable: Story = {
  render: (args) => <Assignee {...args} />,
  args: {
    assignee: {
      full_name: "Alice Johnson",
      id: "789",
      email_address: "alice.johnson@example.com",
      avatar_url: null,
    },
    editable: true,
  },
};

export const WithoutFullName: Story = {
  render: (args) => <Assignee {...args} />,
  args: {
    assignee: {
      id: "101112",
      email_address: "unknown@example.com",
      avatar_url: null,
    },
    editable: false,
  },
};
