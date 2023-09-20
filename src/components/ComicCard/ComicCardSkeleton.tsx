import { faker } from "@faker-js/faker";
import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export default function ComicCardSkeleton() {
  return (
    <Card radius="sm" className="grid grid-cols-[30%,_70%] sx:flex">
      <CardHeader className="overflow-visible p-0 sx:justify-center">
        <Skeleton className="z-0 h-[200px] w-full rounded-md object-cover" />
      </CardHeader>
      <CardBody className="flex w-full flex-col gap-y-1 p-1 sx:justify-between">
        <Skeleton className="mb-9 h-[2ex] w-full rounded-full" />
        {Array.from({ length: 3 }).map(() => (
          <Skeleton
            className="h-[2ex] rounded-full sx:w-full"
            key={faker.string.uuid()}
          />
        ))}
      </CardBody>
    </Card>
  );
}
