import { Icon } from "../icon/icon";

export enum Status {
  PartiallyCompleted = "Partially Completed",
  Completed = "Completed",
  Approved = "Approved",
  Cancelled = "Cancelled",
  Declined = "Declined",
  Archived = "Archived",
}

export type StatusIconProps = {
  status: Status;
};

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case Status.PartiallyCompleted:
      return <Icon icon="status-partially-completed" />;
    case Status.Completed:
      return <Icon icon="status-completed" />;
    case Status.Approved:
      return <Icon icon="status-approved" />;
    case Status.Cancelled:
      return <Icon icon="status-cancelled" />;
    case Status.Declined:
      return <Icon icon="status-declined" />;
    case Status.Archived:
      return <Icon icon="archived" />;
    default:
      return null;
  }
};
