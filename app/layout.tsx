import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Plata",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              areaServed: {
                "@type": "Place",
                name: "La Plata y alrededores",
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
