import { TriangleAlertIcon } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 dark:bg-destructive/90 dark:text-accent-foreground/80 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <TriangleAlertIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
