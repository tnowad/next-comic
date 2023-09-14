import ProfileSidebar from "@/components/ProfileSidebar";
import { createRandomUserPreview } from "@/mocks/comics";
import UserOptionsPage from "./@userOptions/page";
import NextImage from "next/image";

interface ProfileLayoutProps {
  userOptions: React.ReactNode;
  children: React.ReactNode;
}
function getCurrentUser() {
  return createRandomUserPreview();
}
export default function ProfileLayout({
  userOptions = <UserOptionsPage />,
  children,
}: ProfileLayoutProps) {
  const user = getCurrentUser();
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-[225px,_auto]">
        <div className="col-span-full row-[1/span_2] h-60 bg-default">
          <NextImage
            src={user.avatarImage}
            alt={user.username}
            height={200}
            width={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-[1/span_1] row-[2/span_2] ml-4 h-52 w-52 overflow-hidden rounded-full border-2 border-white">
          <NextImage
            src={user.avatarImage}
            alt={user.username}
            height={200}
            width={200}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-[1] row-[4]">{userOptions}</div>
        <div className="col-[2] row-[3/span_3]">
          <div className="text-3xl font-extrabold">{user.username}</div>
          {children}
        </div>
      </div>
    </div>
  );
}
