import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "shadcn/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button className="my-2">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  args: {
    className: "bg-white",
  },
  render: (args) => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Default card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Default card content.</p>
        </CardContent>
        <CardFooter>
          <Button className="my-2">Action</Button>
        </CardFooter>
      </Card>
      <Card {...args}>
        <CardHeader>
          <CardTitle>White Card</CardTitle>
          <CardDescription>White card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>White card content.</p>
        </CardContent>
        <CardFooter>
          <Button className="my-2">Action</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const WithDifferentContent: Story = {
  args: {
    className: "",
  },
  render: (args) => (
    <div className="space-y-4">
      <Card {...args}>
        <CardHeader>
          <CardTitle>Card with List</CardTitle>
          <CardDescription>Card containing a list of items.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="my-2">Action</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>Card containing an image.</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </CardContent>
        <CardFooter>
          <Button className="my-2">Action</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};
