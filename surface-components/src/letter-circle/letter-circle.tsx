export type LetterCircleProps = {
  letter: string;
  variant:
    | "variant-1"
    | "variant-2"
    | "variant-3"
    | "variant-4"
    | "variant-5"
    | "variant-6"
    | "variant-7"
    | "variant-8";
  size?: "large" | "small";
};

export const LetterCircle = ({ letter, size, variant }: LetterCircleProps) => {
  // Determine the size classes based on the size prop
  const sizeClasses = size === "large" ? "w-8 h-8" : "w-6 h-6";
  const letterSize = size === "large" ? "" : "text-sm";
  const letterColor = ["variant-7", "variant-8"].includes(variant) ? "text-gray-800" : "text-white";
  const upperCaseLetter = letter.toUpperCase();

  const gradientClasses: { [key: string]: string } = {
    "variant-1": "bg-gradient-to-br from-blue-700 to-cyan-400",
    "variant-2": "bg-gradient-to-br from-blue-700 to-emerald-400",
    "variant-3": "bg-gradient-to-br from-blue-700 to-lime-500",
    "variant-4": "bg-gradient-to-br from-blue-700 to-red-500",
    "variant-5": "bg-gradient-to-br from-blue-700 to-fuchsia-600",
    "variant-6": "bg-gradient-to-br from-blue-700 to-rose-600",
    "variant-7": "bg-gradient-to-br from-zinc-100 to-slate-300",
    "variant-8": "bg-gradient-to-br from-slate-300 to-slate-400",
  };

  const gradientClass =
    gradientClasses[variant as keyof typeof gradientClasses] ||
    "bg-gradient-to-br from-blue-700 to-cyan-400";

  return (
    <div
      className={`rounded-full flex items-center justify-center ${sizeClasses} ${gradientClass}`}
    >
      <span className={`${letterColor} ${letterSize}`}>{upperCaseLetter}</span>
    </div>
  );
};
