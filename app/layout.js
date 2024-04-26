import "./globals.css";
import localFont from "next/font/local";
import "../public/fonts/custom_fonts.css";

const suisse = localFont({ src: "../public/fonts/Suisse_Int_Regular.otf" });

export const metadata = {
  title: "Estudio del Espacio",
  description: "Estudio del Espacio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={suisse.className}>
        <div className="global-wrapper">{children}</div>
      </body>
    </html>
  );
}
