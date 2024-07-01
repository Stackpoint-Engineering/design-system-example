// Colors.stories.tsx

import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardContent, CardHeader } from "../components/core/card";

const colors = {
  Gray: {
    "gray-0": "var(--gray-0)",
    "gray-50": "var(--gray-50)",
    "gray-100": "var(--gray-100)",
    "gray-200": "var(--gray-200)",
    "gray-300": "var(--gray-300)",
    "gray-400": "var(--gray-400)",
    "gray-500": "var(--gray-500)",
    "gray-600": "var(--gray-600)",
    "gray-600-5": "var(--gray-600-5)",
    "gray-600-8": "var(--gray-600-8)",
    "gray-800": "var(--gray-800)",
    "gray-900": "var(--gray-900)",
  },
  Primary: {
    "primary-100": "var(--primary-100)",
    "primary-200": "var(--primary-200)",
    "primary-400": "var(--primary-400)",
    "primary-600": "var(--primary-600)",
    "primary-700": "var(--primary-700)",
    "primary-800": "var(--primary-800)",
    "primary-900": "var(--primary-900)",
  },
  Status: {
    "status-red": "var(--status-red)",
    "status-yellow": "var(--status-yellow)",
    "status-orange": "var(--status-orange)",
    "status-green": "var(--status-green)",
  },
  Gradients: {
    'primaryGradientBlueTeal': 'var(--primaryGradientBlueTeal)',
  },
};

const ColorBox = ({ name, value }: { name: string; value: string }) => (
  <Card className="bg-white shadow-sm">
    <CardHeader>TW class: {name}</CardHeader>
    <CardContent className="m-4">
      <div
        style={{
          backgroundColor: value,
          width: "100px",
          height: "100px",
        }}
        className="border border-solid rounded-md"
      />
    </CardContent>
  </Card>
);

const GradientBox = ({ name, value }: { name: string; value: string }) => (
  <Card className="bg-white shadow-sm">
    <CardHeader>TW class: {name}</CardHeader>
    <CardContent className="m-4">
      <div
      style={{
        backgroundImage: value,
        width: '100px',
        height: '100px',
        border: '1px solid #000',
      }}
      className="border border-solid rounded-md"
      />
    </CardContent>
  </Card>
);

const ColorsTemplate: Story = () => (
  <div>
    {Object.keys(colors).map((colorCategory) => (
      <div key={colorCategory} style={{ marginBottom: "2rem" }}>
        <h2 className="text-lg mb-4">{colorCategory}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {Object.keys(colors[colorCategory]).map((colorName) =>
            colorCategory === "Gradients" ? (
              <GradientBox
                key={colorName}
                name={colorName}
                value={colors[colorCategory][colorName]}
              />
            ) : (
              <ColorBox
                key={colorName}
                name={colorName}
                value={colors[colorCategory][colorName]}
              />
            )
          )}
        </div>
      </div>
    ))}
  </div>
);

export default {
  title: "Design System/Colors",
  component: ColorsTemplate,
} as Meta;

export const Colors = ColorsTemplate.bind({});
