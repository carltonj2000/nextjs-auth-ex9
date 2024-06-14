import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
});
