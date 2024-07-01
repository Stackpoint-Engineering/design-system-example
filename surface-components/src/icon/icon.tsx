import React from "react";
import { getIcon, IconName } from "./svgs/get-icons";

export type IconProps = {
  icon: IconName;
  title?: string;
  className?: string;
  fill?: string;
};

export const Icon: React.FC<IconProps> = ({ icon, title, className, fill }) => {
  let svgContent = getIcon(icon);

  // If fill is provided, replace fill attribute in SVG paths
  if (fill) {
    svgContent = svgContent.replace(/<path/g, `<path fill="${fill}"`);
  }

  const ariaProps = title ? { "aria-label": title } : { "aria-hidden": true };

  return (
    <div
      role="img"
      className={className}
      {...ariaProps}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
