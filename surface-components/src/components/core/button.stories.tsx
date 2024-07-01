import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'shadcn/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'askBranded'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'xs', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="askBranded">AskBranded</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="xs">Extra Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">Icon</Button>
    </div>
  ),
};
