import { Icon } from "@/icon/icon";

export type PriorityIndicatorProps = {
  priority: "low" | "medium" | "high" | "archive";
};

export const PriorityIndicator = ({ priority }: PriorityIndicatorProps) => {
  return <Icon icon={`priority-${priority}`} title={`priority-${priority}`} />;
};
