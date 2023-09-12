import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="container relative z-10 mx-auto min-h-[calc(100vh_-_64px_-_108px)] max-w-7xl flex-grow">
        <Navbar routes={[]} mobileRoutes={[]} />
        {children}
        <Footer />
      </main>
    </>
  );
}
