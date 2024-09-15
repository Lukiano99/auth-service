// "use client";

// import { useCurrentRole } from "@/hooks/use-current-role";
import { currentRole } from "@/lib/auth";

const AdminPage = async () => {
  // in case this is a client component
  // const role = useCurrentRole();

  // in case this is a server component
  const role = await currentRole();

  return <div>current role: {role}</div>;
};

export default AdminPage;
