import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="container relative z-10 mx-auto mb-12 min-h-[calc(100vh_-_64px_-_108px)] max-w-7xl flex-grow px-6">
        <Navbar routes={[]} mobileRoutes={[]} />
        {children}
        <Footer />
      </main>
    </>
  );
}
