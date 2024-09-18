import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DeleteAccountForm from "./delete-account-form";

interface DeleteAccountButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}
const DeleteAccountButton = ({
  children,
  asChild,
}: DeleteAccountButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent className="p-0 bg-transparent w-auto border-none">
        <DeleteAccountForm />
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountButton;
