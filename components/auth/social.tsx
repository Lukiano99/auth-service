"use client";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant={"outline"}
        onClick={() => onClick("google")}
        className="w-full drop-shadow-sm"
        size={"lg"}
      >
        <Image
          src={
            "https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
          }
          width={60}
          height={60}
          className="size-6"
          alt="Google logo"
        />
      </Button>
      <Button
        variant={"outline"}
        onClick={() => onClick("github")}
        className="w-full drop-shadow-sm"
        size={"lg"}
      >
        <Image
          src={
            "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
          }
          width={60}
          height={60}
          className="size-6"
          alt="Google logo"
        />
      </Button>
    </div>
  );
};

export default Social;
