import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "./select";

type SelectProps = {
  className?: string;
};

const meta: Meta<SelectProps> = {
  title: "shadcn/Select",
  component: SelectTrigger,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Custom class name for styling the Select component",
    },
  },
};

export default meta;

type Story = StoryObj<SelectProps>;

export const DefaultSelect: Story = {
  render: (args) => (
    <Select>
      <SelectTrigger className={`w-64 p-2 ${args.className}`}>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    className: "",
  },
};

export const SelectWithGroups: Story = {
  render: (args) => (
    <Select>
      <SelectTrigger className={`w-64 p-2 ${args.className}`}>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectSeparator />
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="lettuce">Lettuce</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    className: "",
  },
};

export const SelectWithCustomStyling: Story = {
  render: (args) => (
    <Select>
      <SelectTrigger
        className={`w-64 p-2 bg-blue-500 text-white ${args.className}`}
      >
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent className="bg-blue-500 text-white">
        <SelectGroup>
          <SelectLabel className="text-white">Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectSeparator />
          <SelectLabel className="text-white">Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="lettuce">Lettuce</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    className: "",
  },
};
