import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuItems } from "./_data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViziAr - Realidad Aumentada y Virtual",
  description:
    "ViziAr es una empresa de tecnología que se especializa en la creación de soluciones de realidad aumentada y virtual para empresas y organizaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header menu={{ tree: menuItems }} />
        {children}
        <Footer menu={{ tree: menuItems }} />
      </body>
    </html>
  );
}
