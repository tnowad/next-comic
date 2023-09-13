"use client";

import { Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <form className="flex flex-col gap-4">
      <Skeleton className="rounded-md">
        <div className="h-14 w-full"></div>
      </Skeleton>
      <Skeleton className="rounded-md">
        <div className="h-14 w-full"></div>
      </Skeleton>
      <Skeleton className="rounded-md">
        <div className="h-5 w-full"></div>
      </Skeleton>
      <Skeleton className="rounded-md">
        <div className="h-10 w-full"></div>
      </Skeleton>
    </form>
  );
}
