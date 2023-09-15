"use client";

import { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  return (
    <div className="mt-28 flex h-full w-full flex-col items-center">
      <Card className="w-[340px] max-w-full">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => {
              setSelected(key as string);
              router.push(key as string);
            }}
          >
            <Tab key="/login" title="Login">
              {children}
            </Tab>
            <Tab key="/signup" title="Sign up">
              {children}
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
