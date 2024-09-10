"use client";

import CardWrapper from "@/components/auth/card-wapper";
import { LoaderIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log({ token });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        <LoaderIcon className="animate-spin" />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
