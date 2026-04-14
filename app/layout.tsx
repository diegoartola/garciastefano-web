import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://garciastefano.com.ar"),
  title: {
    default: "García Stefano | Estudio Contable Integral en La Plata",
    template: "%s | García Stefano",
  },
  description:
    "Estudio contable integral en La Plata. Asesoramiento contable, impositivo y administrativo para profesionales, pymes y empresas.",
  keywords: [
    "estudio contable",
    "contadora en La Plata",
    "asesoramiento impositivo",
    "liquidación de impuestos",
    "monotributo",
    "responsables inscriptos",
    "sueldos",
    "pymes",
    "empresas",
    "La Plata",
  ],
  applicationName: "García Stefano",
  authors: [{ name: "García Stefano" }],
  creator: "García Stefano",
  publisher: "García Stefano",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "García Stefano | Estudio Contable Integral en La Plata",
    description:
      "Asesoramiento contable, impositivo y administrativo para profesionales, pymes y empresas.",
    url: "https://garciastefano.com.ar",
    siteName: "García Stefano",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "García Stefano - Estudio Contable Integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "García Stefano | Estudio Contable Integral en La Plata",
    description:
      "Asesoramiento contable, impositivo y administrativo para profesionales, pymes y empresas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body>
        <GoogleAnalytics />

        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "García Stefano",
              image: "https://garciastefano.com.ar/og-image.jpg",
              url: "https://garciastefano.com.ar",
              telephone: "+5492215035412",
              email: "info@garciastefano.com.ar",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "La Plata",
                addressLocality: "La Plata",
                addressRegion: "Buenos Aires",
                postalCode: "1900",
                addressCountry: "AR",
              },
              areaServed: {
                "@type": "Place",
                name: "La Plata, Las Flores y atención online en Argentina",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: ["https://wa.me/5492215035412"],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
