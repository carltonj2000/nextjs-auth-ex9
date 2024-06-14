"use server";

import { SignupFormSchema } from "@/_lib/definitions";

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
  return { errors: null };
}
