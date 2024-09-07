import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button type="submit" className="rounded-lg bg-primary text-accent p-3">
          Sign out
        </button>
      </form>
      <h1>
        This is protected route. You will see this just in case you are
        authenticated
      </h1>
    </div>
  );
};

export default SettingsPage;
