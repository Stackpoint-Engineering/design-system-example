import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Icon, IconProps } from "./icon";
import { iconNames } from "./svgs/get-icons";

const meta: Meta<typeof Icon> = {
  title: "Core Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: iconNames, // Dynamically use the list of available icons
      },
      description: "Name of the icon to be displayed",
    },
    title: {
      control: "text",
      description: "Title for the icon, used for accessibility",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the icon container",
    },
    fill: {
      control: "color",
      description: "Fill color for the SVG paths",
    },
  },
  args: {
    icon: "billing",
    title: "billing",
    className: "w-6 h-6",
    fill: "#000",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Icon {...args} />,
};

export const Basic: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: "car",
    title: "car",
    className: "w-8 h-8",
  },
};

export const WithTitle: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: "archived",
    title: "Archived",
    className: "w-8 h-8",
  },
};

export const WithoutTitle: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: "archived",
    title: undefined,
    className: "w-8 h-8",
  },
};

export const WithCustomFill: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: "archived",
    title: undefined,
    className: "w-8 h-8",
    fill: "red",
  },
};

export const AllIcons: StoryFn<IconProps> = () => (
  <div className="flex flex-wrap">
    {iconNames.sort().map((iconName) => (
      <div key={iconName} className="m-6 text-center">
        <Icon icon={iconName} title={iconName} className="w-6 h-6" />
        <p className="text-gray-900 text-base font-normal">{iconName}</p>
      </div>
    ))}
  </div>
);
