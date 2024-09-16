import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div
        className="py-4 min-h-screen w-full md-px-0 px-4 flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:to-slate-900 dark:from-blue-900
"
      >
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
}
