import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViziAr - Realidad Aumentada y Virtual",
  description:
    "ViziAr es una empresa de tecnología que se especializa en la creación de soluciones de realidad aumentada y virtual para empresas y organizaciones.",
};

const menuItems = [
  {
    title: "Soluciones",
    url: "/soluciones",
    items: [
      {
        title: "Realidad Aumentada",
        url: "/realidad-aumentada",
        description:
          "La realidad aumentada es una tecnología que superpone información digital en el mundo real.",
      },
      {
        title: "Realidad Virtual",
        url: "/realidad-virtual",
        description:
          "La realidad virtual es una tecnología que sumerge al usuario en un entorno digital.",
      },
    ],
  },
  {
    title: "Acerca",
    url: "/acerca",
    items: [],
  },
  {
    title: "Blog",
    url: "/blog",
    items: [],
  },
];

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
