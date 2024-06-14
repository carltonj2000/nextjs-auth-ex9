"use client";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "./actions";

const initialState = {
  errors: null,
};

export function SignUpForm() {
  const [state, action] = useFormState(signUp, initialState);
  const { pending } = useFormStatus();
  return (
    <form
      action={action}
      className="flex flex-col items-center max-w-[300px] mx-auto gap-2 mt-4"
    >
      <Label htmlFor="name">Name</Label>
      <Input name="name" />
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <Label htmlFor="email">Email</Label>
      <Input name="email" />
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <Label htmlFor="password">Password</Label>
      <Input name="password" type="password" />
      {state?.errors?.password && <p>{state.errors.password}</p>}
      <Button disabled={pending}>Sign Up</Button>
    </form>
  );
}
