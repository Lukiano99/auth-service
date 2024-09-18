"use server";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { signOut } from "@/auth";

export const deleteAccount = async () => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id as string);
  if (!dbUser) {
    return { error: "Something went wrong! User doesn't exist!" };
  }

  await db.user.delete({
    where: {
      id: dbUser.id,
    },
  });
  await signOut({ redirectTo: "/auth/login" });
};
