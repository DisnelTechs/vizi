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
        title: "Soluciones Integrales para la Gestión Hospitalaria",
        url: "/soluciones-gestion-hospitalaria",
        description:
          "Sistemas diseñados específicamente para satisfacer las necesidades de la gestión hospitalaria",
      },
      {
        title: "Soluciones Innovadoras para la Gestión Gubernamental",
        url: "/soluciones-gestion-gubernamental",
        description:
          "Sistemas integrales diseñados para satisfacer las necesidades únicas de la gobernanza moderna",
      },
    ],
  },
  {
    title: "Servicios",
    url: "/servicios",
    items: [],
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
