import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="container relative z-10 mx-auto min-h-screen max-w-7xl flex-grow">
        <Navbar routes={[]} mobileRoutes={[]} />
        {children}
        <Footer />
      </main>
    </>
  );
}
