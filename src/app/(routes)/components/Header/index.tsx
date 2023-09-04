import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex">
          <div>Search</div>
          <div>User</div>
        </div>
      </div>
    </header>
  );
}
