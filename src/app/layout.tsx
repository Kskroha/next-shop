import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Shoppe",
  description: "Магазин аксессуаров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="my-0 mx-auto flex flex-col text-normal overflow-hidden w-10/12">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
