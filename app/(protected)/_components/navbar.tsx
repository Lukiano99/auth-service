"use client";
import UserButton from "@/components/auth/user-button";
import { ThemeToggleButton } from "@/components/toggle-theme-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-card flex md:flex-row flex-col justify-between items-center p-4 rounded-xl w-full md:w-[600px] shadow-sm space-y-4 md:space-y-0">
      <div className="flex gap-x-2 md:w-fit md:justify-start w-full justify-between">
        <Button
          asChild
          variant={pathName === "/server" ? "default" : "outline"}
          size={"responsive"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          size={"responsive"}
          variant={pathName === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button
          asChild
          size={"responsive"}
          variant={pathName === "/admin" ? "default" : "outline"}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          size={"responsive"}
          variant={pathName === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <div className="space-x-2 flex items-center md:w-fit w-full  justify-end">
        <ThemeToggleButton />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
