"use client";

import { Button, Input, Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function Login() {
  return (
    <form className="flex flex-col gap-4">
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
        Need to create an account?{" "}
        <Link size="sm" as={NextLink} href="/register">
          Register
        </Link>
      </p>
      <div className="flex justify-end gap-2">
        <Button fullWidth color="primary">
          Login
        </Button>
      </div>
    </form>
  );
}
