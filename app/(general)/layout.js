import "./general.css";
import { Navbar } from "@/components";
import Footer from "@/components/footer/Footer";

export default function GeneralLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="general-main">{children}</main>
      <Footer />
    </>
  );
}
