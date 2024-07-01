import { LetterCircle } from "../letter-circle/letter-circle";

export type AssigneeProps = {
  assignee:
    | {
        full_name?: string | null | undefined;
        id: string | null;
        email_address?: string | null | undefined;
        avatar_url?: string | null | undefined;
      }
    | null
    | undefined;
  editable?: boolean;
};

export const Assignee = ({ assignee, editable = false }: AssigneeProps) => {
  if (!assignee || !assignee.full_name) {
    return null;
  }

  const truncateName = (name: string) => {
    const parts = name.trim().split(/\s+/); // Split by one or more spaces
    if (parts.length === 1) return name; // Return the name if it has only one part
    const firstName = parts[0];
    const lastNameInitial = parts[parts.length - 1][0]; // Get the first letter of the last name
    return `${firstName} ${lastNameInitial}.`;
  };

  const trunctatedName = truncateName(assignee.full_name);

  return (
    <div className="inline-flex gap-1">
      <LetterCircle
        letter={assignee.full_name[0].toUpperCase()} // Ensure the letter is uppercase, default to "N" if null
        variant={editable ? "variant-1" : "variant-7"}
        size="small"
      />
      <p>{trunctatedName}</p>
    </div>
  );
};
