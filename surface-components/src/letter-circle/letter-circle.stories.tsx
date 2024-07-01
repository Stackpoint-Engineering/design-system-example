import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { LetterCircle, LetterCircleProps } from "./letter-circle";

const meta: Meta<typeof LetterCircle> = {
  title: "Core Components/LetterCircle",
  component: LetterCircle,
  tags: ["autodocs"],
  argTypes: {
    letter: {
      control: "text",
      description: "The letter to be displayed in the circle",
    },
    variant: {
      control: {
        type: "select",
        options: [
          "variant-1",
          "variant-2",
          "variant-3",
          "variant-4",
          "variant-5",
          "variant-6",
          "variant-7",
          "variant-8",
        ],
      },
      description: "The color variant of the circle",
    },
    size: {
      control: {
        type: "select",
        options: ["large", "small"],
      },
      description: "The size of the circle",
    },
  },
  args: {
    letter: "A",
    variant: "variant-1",
    size: "small",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <LetterCircle {...args} />,
};

export const Basic: Story = {
  render: (args) => <LetterCircle {...args} />,
  args: {
    letter: "B",
    variant: "variant-2",
    size: "large",
  },
};

export const SmallVariant1: Story = {
  render: (args) => <LetterCircle {...args} />,
  args: {
    letter: "C",
    variant: "variant-1",
    size: "small",
  },
};

export const LargeVariant3: Story = {
  render: (args) => <LetterCircle {...args} />,
  args: {
    letter: "D",
    variant: "variant-3",
    size: "large",
  },
};

export const AllVariants: StoryFn<LetterCircleProps> = () => (
  <div className="flex flex-wrap gap-4">
    {[
      "variant-1",
      "variant-2",
      "variant-3",
      "variant-4",
      "variant-5",
      "variant-6",
      "variant-7",
      "variant-8",
    ].map((variant) => (
      <div key={variant} className="text-center">
        <LetterCircle
          letter="E"
          variant={variant as LetterCircleProps["variant"]}
          size="large"
        />
        <p className="mt-2 text-gray-900 text-base font-normal">{variant}</p>
      </div>
    ))}
  </div>
);
