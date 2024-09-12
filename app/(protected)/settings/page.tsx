"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
// import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  // const session = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-accent p-10 rounded-xl">
      <Button onClick={onClick} type="submit" className="w-fit">
        Sign out
      </Button>
      <h1>
        This is protected route. You will see this just in case you are
        authenticated!
      </h1>
    </div>
  );
};

export default SettingsPage;
