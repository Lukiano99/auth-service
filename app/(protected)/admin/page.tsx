"use client";
import RoleGate from "@/components/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route");
      } else {
        toast.error("Forbidden API Route");
      }
    });
  };
  return (
    <Card className="md:w-[600px] w-[450px]">
      <CardHeader>
        <p className="text-2xl text-center font-semibold">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between border shadow-sm rounded-lg p-3">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick} size={"sm"}>
            Click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between border shadow-sm rounded-lg p-3">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button size={"sm"}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
