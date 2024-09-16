import { CircleCheckIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 dark:bg-emerald-500/70 dark:text-accent-foreground p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CircleCheckIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
