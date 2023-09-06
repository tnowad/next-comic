import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="container mx-auto">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
