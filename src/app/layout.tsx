import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oxente Café",
  description:
    "A Oxente Café nasceu da paixão pelos cafés especiais e do desejo de valorizar o Nordeste. Inspirada nas riquezas da região, temos o compromisso de levar ao público grãos selecionados, cultivados e torrados com excelência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${notoSans.className} antialiased bg-[#F5EBDF] text-[#251F1A]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
