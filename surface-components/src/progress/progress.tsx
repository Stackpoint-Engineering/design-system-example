import { Icon } from "../icon/icon";

export type WorkItem = {
  action: string;
  is_complete?: boolean;
  due_date?: string | null; 
  completed_date?: string | null;
};

export type ProgressProps = {
  workItems: WorkItem[] | undefined | null;
};

const getProgressIcon = (fraction: number): string => {
  const progress = Math.round(fraction * 4); // Convert fraction to a scale of 0 to 4
  switch (progress) {
    case 0:
      return "progress-zero";
    case 1:
      return "progress-one";
    case 2:
      return "progress-two";
    case 3:
      return "progress-three";
    case 4:
      return "progress-done";
    default:
      return "progress-zero";
  }
};

export const Progress: React.FC<ProgressProps> = ({ workItems }) => {
  if (!workItems || workItems.length === 0) {
    // Handle undefined, null, or empty workItems
    return (
      <span className="inline-flex items-center border border-solid border-border rounded-xl px-2 py-1">
        <Icon className="pr-2" icon="progress-zero" />
        <p className="text-base text-muted-foreground">0/0</p>
      </span>
    );
  }

  const totalItems = workItems.length;
  const completedItems = workItems.filter((item) => item?.is_complete).length;
  const fraction = totalItems === 0 ? 0 : completedItems / totalItems;
  const progressIcon = getProgressIcon(fraction);

  return (
    <span className="inline-flex items-center border border-solid border-border rounded-xl px-2 py-1">
      <Icon className="pr-2" icon={progressIcon} />
      <p className="text-base text-muted-foreground">{`${completedItems}/${totalItems}`}</p>
    </span>
  );
};