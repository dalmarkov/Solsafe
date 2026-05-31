import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from '@/components/CookieBanner';

// Добавляем домен для корректной генерации метаданных
const DOMAIN = "https://solsafe.pl";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "SolSafe | Profesjonalna Fotowoltaika i Magazyny Energii",
    template: "%s | SolSafe"
  },
  description: "SolSafe – lider w projektowaniu i budowie instalacji fotowoltaicznych oraz magazynów energii. Kompleksowe rozwiązania dla domu, firmy i rolnictwa.",
  keywords: ["fotowoltaika", "magazyny energii", "farmy fotowoltaiczne", "BESS", "odnawialne źródła energii", "Solsafe"],
  authors: [{ name: "SolSafe" }],
  openGraph: {
    title: "SolSafe | Energia na wielką skalę",
    description: "Profesjonalne instalacje fotowoltaiczne i nowoczesne magazyny energii. Wybierz jakość z SolSafe.",
    url: DOMAIN,
    siteName: "SolSafe",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        {/* Структурированные данные для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SolSafe",
              "url": DOMAIN,
              "logo": `${DOMAIN}/logo.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "kontakt@solsafe.pl",
                "contactType": "customer service"
              }
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}