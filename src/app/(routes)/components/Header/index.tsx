import Logo from "@/components/Logo";
import Navbar from "../Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex">
          <ThemeSwitcher />
          <div>Search</div>
          <div>User</div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
