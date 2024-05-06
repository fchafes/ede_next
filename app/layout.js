import "./globals.css";
import localFont from "next/font/local";
import "../public/fonts/custom_fonts.css";
import { Navbar } from "@/components";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/store/Providers";
import GlobalWrapper from "@/components/global_wrapper/GlobalWrapper";

const suisse = localFont({ src: "../public/fonts/Suisse_Int_Regular.otf" });

export const metadata = {
  title: "Estudio del Espacio",
  description: "Estudio del Espacio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={suisse.className}>
        <Providers>
          <GlobalWrapper>
            <Navbar />
            <main className="global-main">{children}</main>
            <Footer />
          </GlobalWrapper>
        </Providers>
      </body>
    </html>
  );
}
