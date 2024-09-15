"use client";

import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2Icon } from "lucide-react";
import { useTransition } from "react";
// import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const [isPending, setTransition] = useTransition();
  const onClick = () => {
    setTransition(() => {
      settings({
        name: "New Name!",
      });
    });
  };
  return (
    <Card className="md:w-[600px] w-[450px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️</p>
      </CardHeader>
      <CardContent>
        <Button onClick={onClick} disabled={isPending}>
          {!isPending && "Update name"}
          {isPending && <Loader2Icon size={18} className="animate-spin" />}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
