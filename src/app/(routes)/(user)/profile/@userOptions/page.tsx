"use client";

import { Button } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="mt-1 flex gap-1 md:grid">
      <Button color="primary">Follow</Button>
      <Button>Message</Button>
      <Button>Report</Button>
    </div>
  );
}
