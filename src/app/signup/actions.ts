"use server";
import bcrypt from "bcrypt";

import { SignupFormSchema } from "@/_lib/definitions";
import { db } from "@/db";

export async function signUp(pervState: any, formData: FormData) {
  const validationResult = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log({ validationResult });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = validationResult.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await db
    .insertInto("user")
    .values({ name, email, password: hashedPassword })
    .execute();

  console.log({ data });
  //   const user = data[0];
  return { errors: null };
}
