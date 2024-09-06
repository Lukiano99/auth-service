"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        variant={"outline"}
        onClick={() => {}}
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
        onClick={() => {}}
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
