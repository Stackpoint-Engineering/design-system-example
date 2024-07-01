import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "shadcn/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    className: "",
  },
  render: ({ className }) => (
    <Tabs defaultValue="tab1" className={className}>
      <TabsList className="space-x-2">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">Content for Tab 1</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">Content for Tab 2</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">Content for Tab 3</div>
      </TabsContent>
    </Tabs>
  ),
};

export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList className="space-x-2">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">Content for Tab 1</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">Content for Tab 2</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">Content for Tab 3</div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Tabs defaultValue="tab1">
        <TabsList className="space-x-2">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h2 className="text-xl font-bold">Overview</h2>
            <p>
              This is the overview content for Tab 1. It contains a brief
              summary of the main points.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h2 className="text-xl font-bold">Details</h2>
            <ul className="list-disc pl-4">
              <li>Detail 1: Explanation of the first detail.</li>
              <li>Detail 2: Explanation of the second detail.</li>
              <li>Detail 3: Explanation of the third detail.</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4">
            <h2 className="text-xl font-bold">More Information</h2>
            <p>
              Here is more detailed information and related content for Tab 3.
            </p>
            <a href="#" className="text-blue-500 underline">
              Read more
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
