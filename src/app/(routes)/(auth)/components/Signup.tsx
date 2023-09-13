"use client";

import { Button, Input, Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function Signup() {
  return (
    <form className="flex h-[300px] flex-col gap-4">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="password"
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <p className="text-center text-small">
        Already have an account?{" "}
        <Link size="sm" as={NextLink} href="/login">
          Login
        </Link>
      </p>
      <div className="flex justify-end gap-2">
        <Button fullWidth color="primary">
          Sign up
        </Button>
      </div>
    </form>
  );
}
