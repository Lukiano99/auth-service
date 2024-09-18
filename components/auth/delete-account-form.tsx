"use client";
import { deleteAccount } from "@/actions/delete-account";
import CardWrapper from "./card-wrapper";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";

const DeleteAccountForm = () => {
  const onClickDeleteAccount = () => {
    deleteAccount();
  };

  return (
    <CardWrapper headerLabel="Delete your account">
      <div className="flex flex-col text-center w-full justify-center items-center space-y-20">
        <h1 className="text-xl font-semibold">
          Be carefull <br /> This action can not be undone
        </h1>
        <div className="w-full flex space-x-4">
          <DialogClose className="w-full">
            <Button variant={"outline"} className="w-full">
              Back
            </Button>
          </DialogClose>
          <Button
            onClick={onClickDeleteAccount}
            className="w-full"
            variant={"destructive"}
          >
            Delete my account
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default DeleteAccountForm;
