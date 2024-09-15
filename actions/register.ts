"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
// import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { newVerification } from "./new-verification";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  // You can use this local, with your Resend account. Here we will bypass this, and imideetly verificate token.

  if (process.env.NODE_ENV === "development") {
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Confirmation email sent!" };
  }
  if (process.env.NODE_ENV === "production") {
    await newVerification(verificationToken.token);
    return { success: "Account succesfully created!" };
  }

  return { success: "Confirmation email sent!" };
};
