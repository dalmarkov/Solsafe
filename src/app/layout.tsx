import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solsafe - Energia dla Ciebie",
  description: "Inteligentne systemy fotowoltaiczne",
  icons: {
    icon: [
      { url: '/icon.png' }, // Стандартная иконка
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' }, // Специально для Safari/iOS
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}