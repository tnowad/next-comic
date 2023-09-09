import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <Navbar routes={[]} mobileRoutes={[]} />
        {children}
        <Footer />
      </main>
    </>
  );
}
