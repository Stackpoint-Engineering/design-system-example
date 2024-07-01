const icons = import.meta.glob("./*.svg", { as: "raw", eager: true });

// Adjusted type to directly map keys to SVG content strings
type Icons = Record<string, string>;

const typedIcons: Icons = icons;

export const iconNames = Object.keys(typedIcons).map((icon) =>
  icon.replace("./", "").replace(".svg", "")
);

export type IconName = (typeof iconNames)[number];

// Adjusted to return the SVG string directly
export const getIcon = (name: IconName): string => {
  return typedIcons[`./${name}.svg`];
};